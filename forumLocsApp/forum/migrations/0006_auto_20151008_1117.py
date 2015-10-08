# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0005_auto_20151008_1113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='normalmessage',
            name='edition_date',
            field=models.DateTimeField(null=True, default=None),
        ),
    ]
