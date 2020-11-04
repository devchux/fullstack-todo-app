from rest_framework import generics, permissions
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.
class RegisterUser(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class LoginUser(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserApi(generics.RetrieveAPIView):
    permission_classes = ( permissions.IsAuthenticated, )
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user
    