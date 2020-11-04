from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', TodoList, basename='todos')

urlpatterns = [
    # path('<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]

urlpatterns += router.urls