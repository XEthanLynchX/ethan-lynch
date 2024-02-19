from django.core.mail import send_mail
from django.http import JsonResponse
from django.conf import settings
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def send_email(request):
    if request.method == 'POST':

        data = json.loads(request.body)

        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        message = data.get('message')

        # Construct the email message
        subject = f'New message from {firstName} {lastName}'
        body = f'Name: {firstName} {lastName}\nEmail: {email}\nMessage: {message}'
        sender_email = f'{email}'
        recipient_email = 'ethanlynchcoaching@gmail.com'

        # Send the email
        send_mail(subject, body, sender_email, [recipient_email])

        return JsonResponse({'message': 'Email sent successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})
