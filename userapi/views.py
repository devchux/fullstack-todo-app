from rest_framework import generics, permissions, views
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import login, authenticate
from knox.models import AuthToken
from knox.views import LoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer

# Create your views here.
class RegisterUser(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserSerializer(user, context=self.get_serializer_context()).data
        return Response({
            "user": data,
            "token": AuthToken.objects.create(user)[1]
        })

# class LoginUser(generics.GenericAPIView):
    
#     serializer_class = LoginSerializer
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         data = UserSerializer(user, context=self.get_serializer_context()).data
#         return Response({
#             "user": data,
#             "token": AuthToken.objects.create(user=user)[1]
#         })

class LoginUser(views.APIView):
    serializer_class = LoginSerializer
    def post(self, request, *args, **kwargs):
        user = authenticate(request, username=request.data.get('username'), password=request.data.get('password'))
        if user:
            login(request, user)
            data = UserSerializer(user).data
            return Response({
                "user": data,
                "token": AuthToken.objects.create(user=user)[1]
            })
        return Response({
            "error": "Invalid Credentials"
        })
    

class UserApi(generics.ListAPIView):
    permission_classes = ( permissions.AllowAny, )
    serializer_class = UserSerializer
    def get_queryset(self):
        return User.objects.all()
    
    