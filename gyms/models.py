from django.db import models


# class Class_level(models.Model):
#     level = models.CharField(max_length=50)

#     def __str__(self):
#         return self.level


# class Class_category(models.Model):
#     class_category = models.CharField(max_length=50)   

#     def __str__(self):
#         return self.class_category



class Class(models.Model):
    title = models.CharField(max_length=50)
    class_level = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    class_availability = models.CharField(max_length=100)
    class_duration = models.CharField(max_length=50)
    link = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Discipline(models.Model):
    discipline_type = models.CharField(max_length=100)

    def __str__(self):
        return self.discipline_type


class Gym(models.Model):
    image = models.CharField(max_length=500)
    name = models.CharField(max_length=50, unique=True)
    lat = models.FloatField()
    lon = models.FloatField()
    address = models.TextField(max_length=500)
    has_classes = models.BooleanField(default=False)
    discipline = models.ForeignKey(
        Discipline,
        related_name='gyms',
        on_delete=models.DO_NOTHING,
        null=True
        )

    classes = models.ManyToManyField(
        Class,
        related_name='gyms',
        null=True
        )
    
    def __str__(self):
        return self.name
