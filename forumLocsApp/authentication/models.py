from django.db import models
from django.contrib.auth.models import User
import datetime
# Create your models here.


class UserForum(models.Model):
    User = models.ForeignKey(User, default=None, null=False)
    date_joined = models.DateTimeField(default=datetime.datetime.now, null=True)
    date_last_connected = models.DateTimeField(auto_now=True, null=True)
    messages_written = models.IntegerField(default=0, null=True)
    url_avatar = models.URLField(default="/media/user_avatars/default/default.jpg", null=True)
    score = models.IntegerField(null=True)
    role = models.IntegerField(default=0, null=True)