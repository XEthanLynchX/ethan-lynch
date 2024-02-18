from django.core.mail import send_mail
from django.http import JsonResponse
from django.conf import settings

def send_email(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Construct the email message
        subject = f'New message from {first_name} {last_name}'
        body = f'Name: {first_name} {last_name}\nEmail: {email}\nMessage: {message}'
        sender_email = f'{email}'
        recipient_email = 'recipient@example.com'

        # Send the email
        send_mail(subject, body, sender_email, [recipient_email])

        return JsonResponse({'message': 'Email sent successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
