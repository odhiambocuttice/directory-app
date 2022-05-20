from django.utils import timezone
from django.db import models

# Create your models here.
class Registration(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=255, blank=False)
    OTP = models.CharField(max_length=4, blank=False)
    created = models.DateTimeField(db_index=True, default=timezone.now)
    updated = models.DateTimeField(db_index=True, default=timezone.now)

    def __str__(self):
        return self.email
