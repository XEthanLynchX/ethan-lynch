from django.urls import path
from .views import StripeCheckout
from .contact_views import send_email

urlpatterns = [
  path('create-checkout-session', StripeCheckout.as_view()),
  path('contact', send_email, name='contact_form'),

]