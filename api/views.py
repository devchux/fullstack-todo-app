from rest_framework.response import Response
from .models import *
from rest_framework.views import APIView
from .serializers import TodoSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions, status

# Create your views here.
class TodoList(ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ] 

    def get_queryset(self):
        return self.request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
    

# class TodoList(APIView):
#     serializer_class = TodoSerializer
#     permission_classes = [
#         permissions.IsAuthenticated,
#     ]

#     def get(self, request):
#         todos = Todo.objects.filter(created_by=request.user.id)
#         data = TodoSerializer(todos, many=True).data

#         return Response(data)

#     def post(self, request):
#         data = {
#             "item": request.data.get('item'),
#             "status": request.data.get('status'),
#             "created_by": request.user.id
#         }
#         serializer = TodoSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class TodoDetail(APIView):
#     serializer_class = TodoSerializer
#     permission_classes = [
#         permissions.IsAuthenticated,
#     ]