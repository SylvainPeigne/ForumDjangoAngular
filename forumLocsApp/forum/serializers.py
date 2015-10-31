__author__ = 'sylflo'

from rest_framework import serializers
from .models import Category, Subject, NormalMessage
from authentication.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category


class SubjectSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = UserSerializer(read_only=True, required=False)

    class Meta:
        model = Subject
        fields = ('id', 'category', 'author', 'name')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(SubjectSerializer, self).get_validation_exclusions()
        return exclusions + ['author', 'nb_see', 'nb_message']


class NormalMessageSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(read_only=True)
    author = UserSerializer(read_only=True, required=False)

    class Meta:
        model = NormalMessage
        fields = ('id', 'content', 'subject', 'author', 'upvote', 'downvote')
