# Generated by Django 4.1 on 2022-08-06 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_rename_uniqie_id_userdata_unique_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Login',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_id', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
    ]
