from rest_framework import serializers
from .models import Registration

# Serializers define the API representation.

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'