from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from .models import Category, Subject, NormalMessage, Vote
from .serializers import CategorySerializer, SubjectSerializer, NormalMessageSerializer
from authentication.serializers import UserSerializer, UserForumSerializer
from django.contrib.auth.models import User
from authentication.models import UserForum

from rest_framework import status, permissions
from .permissions import IsAuthorOfMessage


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

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),
        return permissions.IsAuthenticated(), IsAuthorOfMessage(),

    def perform_create(self, serializer):
        idSubject = serializer.initial_data['idSubject']
        subject = Subject.objects.get(pk=idSubject)
        instance = serializer.save(subject=subject, author=self.request.user)
        return super(NormalMessageViewSet, self).perform_create(serializer)


class NormalMessagePaginateSubjectViewSet(ViewSet):
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


class GetNumberPageInSubjectViewSet(APIView):
    paginate_by = 10

    def get(self, request, subject_pk=None):
        nb_message = NormalMessage.objects.filter(subject=subject_pk).count() / 10

        if nb_message != 0:
            return Response(nb_message)

        return Response({
            'status': 'Bad request',
            'message': 'This subject does not exist'
        }, status=status.HTTP_404_NOT_FOUND)


class VoteMessageApiView(APIView):
    def post(self, request, message_pk, value_vote):
        message = NormalMessage.objects.get(pk=message_pk)
        if request.user == message.author or message is None:
            return Response({
                'status': 'Unauthorized',
                'message': 'You can\'t vote for yourself.'
            }, status=status.HTTP_401_UNAUTHORIZED)
        author = User.objects.get(username=request.user)
        vote, result = Vote.objects.get_or_create(author=author, message=message, vote=value_vote)

        if result is False:
            return Response({
                'status': 'Unauthorized',
                'message': 'You already voted for this message.'
            }, status=status.HTTP_401_UNAUTHORIZED)
        # Do not forget to also update user for vote
        message.author = request.user  # change field
        message.message_vote = message.message_vote + int(value_vote)
        message.save()  # this will update only"""
        return Response({
            'status': 'Authorized',
            'message': 'It works'
        }, status=status.HTTP_201_CREATED)


class GetUserById(generics.RetrieveAPIView):
    queryset = User.objects.order_by('id')
    model = User
    serializer_class = UserSerializer

    def retrieve(self, request, pk=None):
        if (request.user and pk == "0"):
            return Response(UserSerializer(request.user).data)
        return super(GetUserById, self).retrieve(request, pk)

class UserForumViewSet(ModelViewSet):
    queryset = UserForum.objects.order_by('id')
    serializer_class = UserForumSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.order_by('id')
    serializer_class = UserSerializer