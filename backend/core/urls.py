from django.contrib import admin
from django.urls import path, include
from user_checkout.contact_views import send_email, get_csrf_token

urlpatterns = [
    path('api/stripe/', include('user_checkout.urls')),
    path('api/send-email/', send_email, name='send-email'),
]
