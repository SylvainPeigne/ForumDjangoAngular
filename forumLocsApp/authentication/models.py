from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class UserForum(models.Model):
    User = models.ForeignKey(User, default=None, null=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    date_last_connected = models.DateTimeField(auto_now=True)
    messages_written = models.IntegerField()
    url_avatar = models.URLField(default="/media/user_avatars/default/default.jpg")
    score = models.IntegerField()
    role = models.IntegerField(default=0)