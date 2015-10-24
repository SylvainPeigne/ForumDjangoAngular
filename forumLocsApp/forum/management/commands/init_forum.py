__author__ = 'sylflo'

from django.core.management.base import BaseCommand, CommandError
from autofixture import AutoFixture
from django.contrib.auth.models import User
from forum.models import Category, Subject, NormalMessage


class Command(BaseCommand):
    help = 'Command for creating data for the forum'

    #def add_arguments(self, parser):
    #    parser.add_argument('poll_id', nargs='+', type=int)

    def handle(self, *args, **options):

        toto = User.objects.get(pk=1)
        android = Category.objects.get(pk=7)
        subject = Subject.objects.create(category=android, author=toto, name="Ths is a subject", nb_see=0, nb_message=0)
        subject.save()
        #subject = Subject.objects.filter(category=android, author=toto)
        fixture = AutoFixture(NormalMessage, field_values={'author': toto, 'subject': subject})
        entries = fixture.create(100)
        message = "Thread created please go here for test localhost:8000/subject/" + str(subject.pk) + "/1"
        print(message)