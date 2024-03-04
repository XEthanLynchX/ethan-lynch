from django.contrib import admin
from django.urls import path, include
from user_checkout.contact_views import send_email, get_csrf_token
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/stripe/', include('user_checkout.urls')),
    path('api/send-email/', send_email, name='send-email'),
    path('_ah/health', views.health_check),
]
