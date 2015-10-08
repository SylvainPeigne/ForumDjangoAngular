# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0004_normalmessage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='normalmessage',
            name='edition_date',
            field=models.DateTimeField(default=None),
        ),
    ]
