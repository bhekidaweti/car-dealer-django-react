from django.urls import path
from .views import CarList, CarDetail

urlpatterns = [
    path('dealership/', CarList.as_view(), name='car-list'),
    path('dealership/<int:pk>/', CarDetail.as_view(), name='car-detail'),
]
