from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response

from .models import Category, Subject, NormalMessage
from .serializers import CategorySerializer, SubjectSerializer, NormalMessageSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.order_by('id')
    serializer_class = CategorySerializer


class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.order_by('id')
    serializer_class = SubjectSerializer

    def perform_create(self, serializer):
        category = Category.objects.get(pk=5)
        instance = serializer.save(category=category, author=self.request.user, nb_see=0, nb_message=0)
        return super(SubjectViewSet, self).perform_create(serializer)


class NormalMessageViewSet(ModelViewSet):
    queryset = NormalMessage.objects.order_by('id')
    serializer_class = NormalMessageSerializer

    def perform_create(self, serializer):
        subject = Subject.objects.get(pk=5)
        instance = serializer.save(subject=subject)
        return super(NormalMessageViewSet, self).perform_create(serializer)


class NormalMessageSubjectViewSet(ViewSet):
    queryset = NormalMessage.objects.select_related('subject').all()
    serializer_class = NormalMessage

    def list(self, request, subject_pk=None):
        print("Subject = ", subject_pk)
        queryset = self.queryset.filter(subject=subject_pk)
        print("queryset = ", queryset)
        serializer = NormalMessageSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)