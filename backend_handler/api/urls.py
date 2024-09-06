from django.urls import path
from .views import register_user, login_user
from . import views

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('todos/', views.get_todos, name='todos'),
    path('', home, name='home')
]

