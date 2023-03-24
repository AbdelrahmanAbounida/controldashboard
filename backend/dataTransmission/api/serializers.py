from dataTransmission.models import PinPosition
from rest_framework.serializers import ModelSerializer

class PinPositionSerializer(ModelSerializer):
    class Meta:
        model = PinPosition
        fields= '__all__'

