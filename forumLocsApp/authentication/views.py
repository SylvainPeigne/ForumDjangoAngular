import json
from django.contrib.auth import login, authenticate
from rest_framework import views, status
from rest_framework.response import Response
from .serializers import UserSerializer


class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body.decode('utf-8'))

        username = data.get('username', None)
        password = data.get('password', None)

        account = authenticate(username=username, password=password)

        if account is not None:
            login(request, account)
            serialized = UserSerializer(account)
            return Response(serialized.data)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'This account has been disabled.'
            }, status=status.HTTP_401_UNAUTHORIZED)