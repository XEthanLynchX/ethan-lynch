# views.py

from django.shortcuts import render
from django.conf import settings
from django.urls import reverse
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

import stripe

stripe.api_key = settings.STRIPE_PRIVATE_KEY

def index(request):
    return render(request, 'index.html')

def thanks(request):
    return render(request, 'thanks.html')

csrf_exempt
def checkout(request):
    # Assuming you have a list of product IDs and their corresponding quantities
    products = [
        {'product_id': 'price_1ObZl7JYXhvyfXz9piNUESG8', 'quantity': 1},
        {'product_id': 'price_1OeSV9JYXhvyfXz9LTht4jUV', 'quantity': 1},
        {'product_id': 'price_1OZPxuJYXhvyfXz9mbg8Wjxg', 'quantity': 1},
        {'product_id': 'price_1OZPzPJYXhvyfXz93WqOem3x', 'quantity': 1},
        # Add more products as needed
 ]

    line_items = [
        {
            'price': product['product_id'],
            'quantity': product['quantity'],
        }
        for product in products
    ]

    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=line_items,
        mode='payment',
        success_url=request.build_absolute_uri(reverse('thanks')) + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url=request.build_absolute_uri(reverse('index')),
    )

    return JsonResponse({
        'session_id' : session.id,
        'stripe_public_key' : settings.STRIPE_PUBLIC_KEY
    })

    context = {
        'session_id': session.id,
        'stripe_public_key': settings.STRIPE_PUBLIC_KEY
    }

@csrf_exempt
def stripe_webhook(request):

    print('WEBHOOK!')
    # You can find your endpoint's secret in your webhook settings
    endpoint_secret = settings.STRIPE_ENDPOINT_SECRET

    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        print(session)
        line_items = stripe.checkout.Session.list_line_items(session['id'], limit=1)
        print(line_items)

    return HttpResponse(status=200)
