# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Gym, Discipline, Class


#nested in class model.  Attempt to pre-populate classes in the class model :(

# class NestedClass_levelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Class
#         fields = ('id', 'level')


# class NestedClass_categorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Class
#         fields = ('id', 'class_category')


# class Class_levelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Class_level
#         fields = ('id', 'level')



# class Class_categorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Class_category
#         fields = ('id', 'class_category')



class NestedGymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = ('id' 'name')


class NestedClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('id', 'title', 'class_level', 'category', 'class_availability', 'class_duration', 'link')


class NestedDisciplineSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Discipline
        fields = ('id', 'discipline_type')



class DisciplineSerializer(serializers.ModelSerializer):

    gyms = NestedGymSerializer(many=True)

    class Meta:
        model = Discipline
        fields = ('id', 'gyms')


class ClassSerializer(serializers.ModelSerializer):

    gyms = NestedGymSerializer(many=True)
    
    class Meta:
        model = Class
        fields = ('id', 'title', 'class_level', 'category', 'class_availability', 'class_duration', 'link', 'gyms')


class GymSerializer(serializers.ModelSerializer):

    # discipline_type = NestedDisciplineSerializer()
    classes = NestedClassSerializer(many=True)

    def create(self, data):
        classes_data = data.pop('class')
        discipline_data = data.pop('disciplines')

        gym = Gym(**data)
        gym.discipline = Discipline.objects.get(**discipline_data)
        classes = [Class.objects.get(**class_data) for class_data in classes_data]
        gym.save()
        gym.classes.set(classes)
        return gym

    def update(self, gym, data):
        classes_data = data.pop('class')
        discipline_data = data.pop('disciplines')

        gym.image = data.get('image', gym.image)
        gym.name = data.get('name', gym.name)
        gym.lat = data.get('lat', gym.lat)
        gym.lon = data.get('lon', gym.lon)
        gym.has_classes = data.get('has_classes', gym.has_classes)

        gym.discipline = Discipline.objects.get(**discipline_data)
        classes = [Class.objects.get(**class_data) for class_data in classes_data]

        gym.save()
        gym.classes.set(classes)
        return gym


    class Meta:
        model = Gym
        fields = ('id', 'image', 'name', 'lat', 'lon', 'has_classes', 'classes')
