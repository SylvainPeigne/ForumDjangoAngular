# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0008_auto_20151029_1056'),
    ]

    operations = [
        migrations.RenameField(
            model_name='normalmessage',
            old_name='downvote',
            new_name='vote',
        ),
        migrations.RemoveField(
            model_name='normalmessage',
            name='upvote',
        ),
    ]
