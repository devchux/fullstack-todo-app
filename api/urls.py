from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', TodoList, basename='todos')

urlpatterns = [
    # path('', TodoList.as_view(), name='todos'),
]

urlpatterns += router.urls