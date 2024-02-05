
import stripe 
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework import status


import stripe
# This is your test secret API key.
stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeCheckoutTraining(APIView):
    def post(self, request, *args, **kwargs):
        recurring_products = [
            {'price': 'price_1ObZl7JYXhvyfXz9piNUESG8', 'quantity': 1},  #online
            {'price': 'price_1OeSV9JYXhvyfXz9LTht4jUV', 'quantity': 1}, #inperson
            # Add more products as needed
        ]
        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=recurring_products,
                mode='subscription',
                success_url=settings.SITE_URL + '/?success-true&session_id={CHECKOUT_SESSION_ID}', #this will probably need to be changed when deployed
                cancel_url=settings.SITE_URL + '/cancel=true',
            )
            return redirect(checkout_session.url)
        except: 
            return Response({'error': 'Something went wrong when creating stripe checkout session'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class StripeCheckoutSub(APIView):
    def post(self, request, *args, **kwargs):
        products = [
        {'price': 'price_1OgG2LJYXhvyfXz9Ito4gZFC', 'quantity': 1},  #Women
        {'price': 'price_1OZPzPJYXhvyfXz93WqOem3x', 'quantity': 1}, #Men
        {'price': 'price_1OZPxuJYXhvyfXz9mbg8Wjxg', 'quantity': 1},  #nutrition
           
            # Add more products as needed
        ]
        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items= products  ,
                mode='payment',
                 success_url=settings.SITE_URL + '/?success-true&session_id={CHECKOUT_SESSION_ID}', #this will probably need to be changed when deployed
                cancel_url=settings.SITE_URL + '/cancel=true',
            )
            return redirect(checkout_session.url)
        except: 
            return Response({'error': 'Something went wrong when creating stripe checkout session'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 

