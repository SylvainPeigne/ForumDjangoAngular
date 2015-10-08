# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0002_subject'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='category',
            field=models.ForeignKey(to='forum.Category', default=None),
        ),
        migrations.AddField(
            model_name='subject',
            name='nb_message',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='subject',
            name='nb_see',
            field=models.IntegerField(default=0),
        ),
    ]
