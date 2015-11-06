__author__ = 'sylflo'

from rest_framework import permissions


class IsAuthorOfMessage(permissions.BasePermission):
    def has_object_permission(self, request, view, message):
        if request.user:
            return message.author == request.user
        return False

