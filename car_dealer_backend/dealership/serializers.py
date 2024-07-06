from rest_framework import serializers
from .models import Car, CarImage

class CarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarImage
        fields = ('id', 'images')

class CarSerializer(serializers.ModelSerializer):
    images = CarImageSerializer(many=True, read_only=True)

    class Meta:
        model = Car
        fields = (
            'id', 'image', 'description', 'year', 'mileage', 'make', 'model', 
            'vehicle_type', 'seats', 'doors', 'transmission_type', 'fuel_type', 
            'is_sold', 'images'
        )
