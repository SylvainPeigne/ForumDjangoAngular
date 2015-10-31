# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0006_auto_20151008_1117'),
    ]

    operations = [
        migrations.AddField(
            model_name='normalmessage',
            name='author',
            field=models.ForeignKey(default=None, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='subject',
            name='author',
            field=models.ForeignKey(default=None, to=settings.AUTH_USER_MODEL),
        ),
    ]
