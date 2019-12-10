# pylint: disable=no-member,arguments-differ
from rest_framework.authentication import BasicAuthentication, BaseAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth.models import User
from django.conf import settings
import jwt
from django.contrib.auth import get_user_model
User = get_user_model()

class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')
        print(f'header: {header}')


        if not header:
            return None

        if header.startswith('Basic'): # Add this line in
            return None

        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'new Invalid Authorization Header'})

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})

        return (user, token)
        