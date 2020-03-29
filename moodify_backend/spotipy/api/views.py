from rest_framework.generics import ListCreateAPIView
from spotipy.models import Account
from .serializers import AccountSerializer

class AccountListCreateView(ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer