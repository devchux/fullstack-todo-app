# Generated by Django 3.0.8 on 2020-11-03 17:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_todo_created_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='created_by',
        ),
    ]
