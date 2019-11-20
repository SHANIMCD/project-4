# pylint: disable=no-member
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Gym, Class, Discipline
from .serializers import GymSerializer, DisciplineSerializer, ClassSerializer

# Create your views here.

class GymListView(ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class GymDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class ClassListView(ListAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class ClassDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

    
class DisciplineListView(ListCreateAPIView):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer

class DisciplineDetailView(RetrieveAPIView):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer
