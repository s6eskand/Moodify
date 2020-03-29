from rest_framework import serializers
from spotipy.models import Account

#spotipy serializer
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'