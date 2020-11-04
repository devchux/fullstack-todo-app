from rest_framework.response import Response
from .models import *
from rest_framework.views import APIView
from .serializers import TodoSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

# Create your views here.
class TodoList(ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ] 

    def get_queryset(self):
        return request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(created_by=request.user)
    

# class TodoDetail(APIView):
#     serializer_class = TodoSerializer

#     def get(self, request, pk):
#         todos = Todo.objects.get(id=pk)
#         data = TodoSerializer(todos).data

#         return Response(data)

#     def put(self, request, pk):
#         todo = Todo.objects.get(id=pk)
#         serializer = TodoSerializer(data=request.data, instance=todo)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)

#     def delete(self, request, pk):
#         todo = Todo.objects.get(id=pk)

#         if todo:
#             serializer = TodoSerializer(todo)
#             todo.delete()
         
#         return Response(serializer.data)

    