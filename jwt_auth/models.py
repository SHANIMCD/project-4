
from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.contrib.auth import get_user_model
# User = get_user_model()


class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
