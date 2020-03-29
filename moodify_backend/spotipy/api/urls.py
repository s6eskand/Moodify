from django.urls import path
from .views import AccountListCreateView

urlpatterns = [
    path('', AccountListCreateView.as_view()),
]