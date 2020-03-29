from django.db import models

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=100)
    audio_url = models.CharField(max_length=500, default='null')
    spotify_link = models.CharField(max_length=500, default='null')