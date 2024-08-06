from django.urls import path
from api.views import HotelView


urlpatterns = [
    path('',HotelView.as_view(),name='hotels')
]