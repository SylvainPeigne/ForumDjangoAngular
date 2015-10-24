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
        category = Category.objects.get(pk=7)
        instance = serializer.save(category=category, author=self.request.user, nb_see=0, nb_message=0)
        return super(SubjectViewSet, self).perform_create(serializer)


class NormalMessageViewSet(ModelViewSet):
    queryset = NormalMessage.objects.order_by('id')
    serializer_class = NormalMessageSerializer

    def perform_create(self, serializer):
        idSubject = serializer.initial_data['idSubject']
        subject = Subject.objects.get(pk=idSubject)
        instance = serializer.save(subject=subject, author=self.request.user)
        return super(NormalMessageViewSet, self).perform_create(serializer)


class NormalMessageSubjectViewSet(ViewSet):
    queryset = NormalMessage.objects.select_related('subject').all()
    serializer_class = NormalMessage
    paginate_by = 10

    def list(self, request, subject_pk=None):
        str_split = subject_pk.split("-")
        subject_pk = str_split[0]
        nb_pagination = str_split[1]

        value = int(nb_pagination) * self.paginate_by
        queryset = self.queryset.filter(subject=subject_pk)[value - self.paginate_by:value]
        serializer = NormalMessageSerializer(queryset, many=True)
        return Response(serializer.data)