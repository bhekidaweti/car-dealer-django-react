from django.db import models

# Create your models here.

class Car(models.Model):
    TRANSMISSION_CHOICES = [ 
    ("AUTOMATIC", "AUTOMATIC"), 
    ("MANUAL", "MANUAL"), 
    ] 
    FUEL_CHOICES = [ 
    ("PETROL", "PETROL"), 
    ("DIESEL", "DIESEL"), 
    ("ELECTRIC", "ELECTRIC"), 
    ("HYBRID", "HYBRID"), 
    ]
    VEHICLE_CHOICES = [ 
    ("SUV", "SUV"), 
    ("TRUCK", "TRUCK"),
    ("BUS", "BUS"),
    ("BAKKIE", "BAKKIE"),
    ("SEDAN", "SEDAN"),
    ("HATCHBACK", "HATCHBACK"),
    ] 
    image = models.ImageField(upload_to='cars/')
    description = models.CharField(max_length=1000)
    year = models.IntegerField()
    mileage = models.IntegerField(null=True)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    vehicle_type = models.CharField(max_length=50, choices=VEHICLE_CHOICES, default='TRUCK')
    seats = models.IntegerField()
    doors = models.IntegerField()
    transmission_type = models.CharField(max_length=50, choices= TRANSMISSION_CHOICES, default= 'MANUAL')
    fuel_type = models.CharField(max_length=50, choices=FUEL_CHOICES, default= 'PETROL')
    is_sold = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    
class CarImage(models.Model):
    car = models.ForeignKey(Car, related_name='images', on_delete=models.CASCADE)
    images = models.ImageField(upload_to='car_images/')

    def __str__(self):
        return f"Image for {self.car}"