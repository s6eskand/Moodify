from django.urls import path

from .views import (
    AccountListView,
    AccountCreateView,
    AccountUpdateView,
    AccountDeleteView
)

urlpatterns = [
    path('', AccountListView.as_view()),
    path('create/', AccountCreateView.as_view()),
    path('<pk>/update/', AccountUpdateView.as_view()),
    path('<pk>/delete/', AccountDeleteView.as_view())
]