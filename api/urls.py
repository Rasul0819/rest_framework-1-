from django.urls import path
from api.views import HotelView,HotelDetailView


urlpatterns = [
    path('',HotelView.as_view(),name='hotels'),
    path('detail/<int:pk>',HotelDetailView.as_view(),name='update'),
]