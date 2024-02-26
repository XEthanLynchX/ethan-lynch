from django.contrib import admin
from django.urls import path, include
from user_checkout.contact_views import send_email, get_csrf_token

urlpatterns = [
    path('https://ethan-lynch-coaching-415103.ue.r.appspot.com/api/stripe/', include('user_checkout.urls')),
    path('https://ethan-lynch-coaching-415103.ue.r.appspot.com/api/send-email/', send_email, name='send-email'),
]
