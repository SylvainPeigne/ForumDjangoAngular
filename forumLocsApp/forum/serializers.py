__author__ = 'sylflo'

from rest_framework import serializers
from .models import Category, Subject, NormalMessage


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category


class SubjectSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    #author =

    class Meta:
        model = Subject


class NormalMessageSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer(read_only=True)

    class Meta:
        model = NormalMessage
