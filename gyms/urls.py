from django.urls import path
from .views import GymListView, GymDetailsView, ClassListView, DisciplineListView

urlpatterns = [
    path('gyms', GymListView.as_view()),
    path('gyms/<int:pk>/', GymDetailsView.as_view()),
    path('classes/', ClassListView.as_view()),
    path('disciplines', DisciplineListView.as_view())
]