from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Category, Subject, NormalMessage
from .serializers import CategorySerializer, SubjectSerializer, NormalMessageSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.order_by('id')
    serializer_class = CategorySerializer


class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.order_by('id')
    serializer_class = SubjectSerializer

    def perform_create(self, serializer):
        category = Category.objects.get(pk=3)
        instance = serializer.save(category=category)
        return super(SubjectViewSet, self).perform_create(serializer)


class NormalMessageViewSet(ModelViewSet):
    queryset = NormalMessage.objects.order_by('id')
    serializer_class = NormalMessageSerializer

    def perform_create(self, serializer):
        subject = Subject.objects.get(pk=1)
        instance = serializer.save(subject=subject)
        return super(NormalMessageViewSet, self).perform_create(serializer)
