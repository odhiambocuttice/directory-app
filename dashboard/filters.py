from .models import Registration
from django_filters import FilterSet, CharFilter, NumberFilter

class RegistrationFilter(FilterSet):
    """filter data."""
    name = CharFilter(field_name='name', lookup_expr='icontains')
    email = CharFilter(field_name='email', lookup_expr='icontains')
    phone_number = NumberFilter(field_name='phone_number', lookup_expr='icontains')

    class Meta:
        """Restrict filter fields."""

        model = Registration
        fields = ('name', 'email', 'phone_number')
        ordering = ('created',)
