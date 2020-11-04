from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    STATUS = (
        ('pending', 'pending'),
        ('done', 'done'),
    )
    item = models.CharField(max_length=200)
    created_by = models.ForeignKey(User, related_name='todos',  null=True, on_delete=models.CASCADE)
    status = models.CharField(max_length=200, default='pending', choices=STATUS)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item
    
