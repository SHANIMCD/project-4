from django.urls import path
from .views import GymListView, GymDetailsView

urlpatterns = [
    path('gyms', GymListView.as_view()),
    path('gyms/<int:pk>', GymDetailsView.as_view())
]