import stripe 
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework import status

stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeCheckoutTraining(APIView):
    def post(self, request, *args, **kwargs):
        price_id = request.data.get('price_id')
        if not price_id:
            return Response({'error': 'No price_id provided'}, status=status.HTTP_400_BAD_REQUEST)

        recurring_products = [{'price': price_id, 'quantity': 1}]

        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=recurring_products,
                mode='subscription',
                success_url=settings.SITE_URL + '/?success-true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/cancel=true',
            )
            return redirect(checkout_session.url)
        except: 
            return Response({'error': 'Something went wrong when creating stripe checkout session'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class StripeCheckoutSub(APIView):
    def post(self, request, *args, **kwargs):
        price_id = request.data.get('price_id')
        if not price_id:
            return Response({'error': 'No price_id provided'}, status=status.HTTP_400_BAD_REQUEST)

        products = [{'price': price_id, 'quantity': 1}]

        try:
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=products,
                mode='payment',
                success_url=settings.SITE_URL + '/?success-true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/cancel=true',
            )
            return redirect(checkout_session.url)
        except: 
            return Response({'error': 'Something went wrong when creating stripe checkout session'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)