from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    color = models.CharField(max_length=8)


class Subject(models.Model):
    category = models.ForeignKey(Category, default=None, null=False)
    author = models.ForeignKey(User, default=None, null=False)
    name = models.CharField(max_length=255)
    nb_see = models.IntegerField(default=0)
    nb_message = models.IntegerField(default=0)


class NormalMessage(models.Model):
    author = models.ForeignKey(User, default=None, null=False)
    subject = models.ForeignKey(Subject, default=None, null=False)
    content = models.TextField()
    vote = models.IntegerField(default=0)
    creation_date = models.DateTimeField(auto_now_add=True)
    edition_date = models.DateTimeField(default=None, null=True)
