__author__ = 'sylflo'

from autofixture import AutoFixture
from django.contrib.auth.models import User
from forum.models import Category, Subject, NormalMessage


toto = User.objects.get(pk=1)
android = Category.objects.get(pk=7)
subject = Subject.objects.filter(category=android, author=toto)
fixture = AutoFixture(NormalMessage, field_values={'author': toto, 'subject': subject[0]})
entries = fixture.create(100)
