# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0007_auto_20151029_0944'),
    ]

    operations = [
        migrations.RenameField(
            model_name='normalmessage',
            old_name='vote',
            new_name='upvote',
        ),
        migrations.AddField(
            model_name='normalmessage',
            name='downvote',
            field=models.IntegerField(default=0),
        ),
    ]
