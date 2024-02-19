import stripe
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework import status

stripe.api_key = settings.STRIPE_LIVE_SECRET_KEY

class StripeCheckout(APIView):
    def post(self, request):
        # Retrieve the payload
        payload = request.data
        # Process the payload
        print(payload)  # Just an example, you can process the payload as needed
        
        # Retrieve price_id and mode from payload
        price_id = payload.get('price_id')
        mode = payload.get('mode', '').strip()  # 'subscription' or 'payment', with whitespace removed

        # Check if price_id and mode are valid
        if not price_id or mode not in ['subscription', 'payment']:
            return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)

        # Define line items based on the payload
        products = [{'price': price_id, 'quantity': 1}]
        
        try:
            # Create a checkout session with Stripe
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=products,
                mode=mode,
                success_url=settings.SITE_URL + '/?success-true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/cancel=true',
            )
            # Redirect to the checkout session URL
            return redirect(checkout_session.url)
        except stripe.error.InvalidRequestError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except stripe.error.StripeError as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
