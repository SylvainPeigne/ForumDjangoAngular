# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forum', '0009_auto_20151102_0723'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('vote', models.IntegerField(default=0)),
                ('author', models.ForeignKey(default=None, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RenameField(
            model_name='normalmessage',
            old_name='vote',
            new_name='message_vote',
        ),
        migrations.AddField(
            model_name='vote',
            name='message',
            field=models.ForeignKey(default=None, to='forum.NormalMessage'),
        ),
    ]
