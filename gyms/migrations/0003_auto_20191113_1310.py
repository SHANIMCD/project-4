# Generated by Django 2.2.7 on 2019-11-13 13:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gyms', '0002_class_discipline'),
    ]

    operations = [
        migrations.RenameField(
            model_name='class',
            old_name='Description',
            new_name='description',
        ),
    ]
