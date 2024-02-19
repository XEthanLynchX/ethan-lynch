from django.urls import path
from .views import StripeCheckout

urlpatterns = [
  path('create-checkout-session', StripeCheckout.as_view()),


]