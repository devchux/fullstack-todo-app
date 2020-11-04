# Generated by Django 3.0.8 on 2020-08-12 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=200)),
                ('status', models.CharField(choices=[('pending', 'pending'), ('done', 'done')], default='pending', max_length=200)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
