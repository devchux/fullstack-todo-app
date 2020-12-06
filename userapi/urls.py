from .views import *
from django.urls import path, include

urlpatterns = [
    path('auth/', include('knox.urls')),
    path('register/', RegisterUser.as_view()),
    path('login/', LoginUser.as_view()),
    path('user/', UserApi.as_view()),
    # path('logout/', knox_views.LogoutView.as_view()),
]


