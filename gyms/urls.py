from django.urls import path
from .views import GymListView, GymDetailsView, ClassListView, ClassDetailsView, DisciplineListView, DisciplineDetailView

urlpatterns = [
    path('gyms', GymListView.as_view()),
    path('gyms/<int:pk>/', GymDetailsView.as_view()),
    path('classes/', ClassListView.as_view()),
    path('classes/<int:pk>/', ClassDetailsView.as_view()),
    path('disciplines', DisciplineListView.as_view()),
    path('disciplines/<int:pk>', DisciplineDetailView.as_view())
]