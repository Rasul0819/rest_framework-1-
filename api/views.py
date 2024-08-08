from django.shortcuts import render
from . import serializers
from rest_framework import generics
from hotel.models import Hotel,HotelCategory


class HotelView(generics.ListAPIView):
    queryset = Hotel.objects.all()
    serializer_class = serializers.HotelSerializer



# class HotelUpdateView(generics.UpdateAPIView):#ozgertiw
#     queryset = Hotel.objects.all()
#     serializer_class=serializers.HotelSerializer

# generics.CreateAPIView,
# generics.DestroyAPIView


class HotelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = serializers.HotelSerializer
