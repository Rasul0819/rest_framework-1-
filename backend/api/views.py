from django.shortcuts import render
from . import serializers
from rest_framework import generics
from hotel.models import Hotel,HotelCategory


class HotelView(generics.ListAPIView):
    queryset = Hotel.objects.all()
    serializer_class = serializers.HotelSerializer





class HotelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = serializers.HotelSerializer
