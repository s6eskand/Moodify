# Generated by Django 3.0.4 on 2020-03-29 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spotipy', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='audio_url',
            field=models.CharField(default='null', max_length=500),
        ),
        migrations.AddField(
            model_name='account',
            name='spotify_link',
            field=models.CharField(default='null', max_length=500),
        ),
    ]