__author__ = 'sylflo'

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserForum


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email',)
        write_only_fields = ('password',)

    def restore_object(self, attrs, instance=None):
        # call set_password on user object. Without this
        # the password will be stored in plain text.
        user = super(UserSerializer, self).restore_object(attrs, instance)
        user.set_password(attrs['password'])
        return user

"""
class UserForumSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserForum
        fields = ('date_joined', 'date_last_connected', 'messages_written', 'url_avatar', 'score', 'role')
"""