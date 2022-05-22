from .filters import RegistrationFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Registration
from .serializers import RegistrationSerializer
from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView

# Create your views here.
class RegistrationRetrieveView(ListAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    filter_class = RegistrationFilter
    permissions_classes = (permissions.AllowAny, )
    name = 'Registration list'


class RegistrationCreateView(CreateAPIView):
    queryset = Registration.objects.all().order_by('created')
    serializer_class = RegistrationSerializer
    filter = RegistrationFilter
    permissions_classes = (permissions.AllowAny, )

    # def post(self, request, format=None):
    #     data = self.request.data
    #     phone_number = data['phone_number']
    #     queryset = Registration.objects.order_by(
    #         'id').filter(phone_number__iexact=phone_number)
    #     serializer = RegistrationSerializer(queryset, many=True)

    #     return Response(serializer.data)
