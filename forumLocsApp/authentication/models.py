from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class UserForum(models.Model):
    User = models.ForeignKey(default=None, null=True)