# Generated by Django 5.0.6 on 2024-07-05 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dealership', '0004_carimage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='carimage',
            old_name='image',
            new_name='images',
        ),
    ]
