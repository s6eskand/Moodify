from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from spotipy.models import Account
from .serializers import AccountSerializer

class AccountListView(ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountCreateView(CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountUpdateView(UpdateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class AccountDeleteView(DestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer