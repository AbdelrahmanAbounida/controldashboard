from rest_framework import mixins,generics
from .serializers import PinPositionSerializer
from dataTransmission.models import PinPosition

class PinPositionListView(generics.ListAPIView):
    queryset = PinPosition.objects.all()
    serializer_class = PinPositionSerializer

class PinPositionCreateView(generics.CreateAPIView):
    queryset = PinPosition.objects.all()
    serializer_class = PinPositionSerializer

class PinPositionUpdateView(generics.UpdateAPIView):
    queryset = PinPosition.objects.all()
    serializer_class = PinPositionSerializer

class PinPositionDestroyView(generics.DestroyAPIView):
    queryset = PinPosition.objects.all()
    serializer_class = PinPositionSerializer