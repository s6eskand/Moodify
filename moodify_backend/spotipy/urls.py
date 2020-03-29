from django.urls import path
from . import views
from rest_framework import routers
from .api import AccountViewSet

router = routers.DefaultRouter()
router.register('api/spotipy', AccountViewSet, 'spotipy')

urlpatterns = router.urls