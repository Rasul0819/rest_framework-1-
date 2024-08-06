from rest_framework import serializers
from hotel.models import Hotel,HotelCategory


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'
