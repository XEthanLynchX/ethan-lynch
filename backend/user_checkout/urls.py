from django.urls import path
from .views import StripeCheckoutTraining, StripeCheckoutSub

urlpatterns = [
  path('create-checkout-session', StripeCheckoutTraining.as_view()),
  path('create-checkout-session-sub', StripeCheckoutSub.as_view()),

]