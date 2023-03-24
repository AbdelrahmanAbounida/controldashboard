from .models import Account
from rest_framework.serializers import ModelSerializer
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model # instead of importing account



class DRFAccountSerializer(ModelSerializer):
    class Meta():
        model = Account
        fields = '__all__'

class AccountCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = get_user_model()
        fields = ['id','email','password']