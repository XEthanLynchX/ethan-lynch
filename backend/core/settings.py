import os
from pathlib import Path
from decouple import AutoConfig, Csv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/
config = AutoConfig()

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'ethanlynchcoaching@gmail.com'
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

ALLOWED_HOSTS = []
STATIC_ROOT = '../static'


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'djstripe',
    'rest_framework',
    'user_checkout',
    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
]


CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True

DJSTRIPE_WEBHOOK_VALIDATION = 'retrieve_event'



ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.corewsgi.application'





DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
  
    'DEFAULT_PEREMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
}



LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True



STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'backend', 'static'),
]

SITE_URL = 'http://localhost:5173'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

SECRET_KEY = config('SECRET_KEY')

# Stripe API Keys
# STRIPE_TEST_PUBLIC_KEY = config('STRIPE_TEST_PUBLIC_KEY')
# STRIPE_TEST_SECRET_KEY = config('STRIPE_TEST_SECRET_KEY')
# DJSTRIPE_WEBHOOK_SECRET = config('DJSTRIPE_WEBHOOK_SECRET', default='')
STRIPE_LIVE_PUBLIC_KEY = config('STRIPE_LIVE_PUBLIC_KEY')
STRIPE_LIVE_SECRET_KEY = config('STRIPE_LIVE_SECRET_KEY')

DJSTRIPE_FOREIGN_KEY_TO_FIELD = "id"
