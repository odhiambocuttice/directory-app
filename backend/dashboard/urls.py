from django.urls import path

from .views import RegistrationCreateView, RegistrationRetrieveView

urlpatterns = [
    path('view/', RegistrationRetrieveView.as_view()),
    path('create/', RegistrationCreateView.as_view()),
]
# Compare this snippet from backend/dashboard/urls.py:
