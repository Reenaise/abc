from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.http import JsonResponse

# Register new users
@api_view(['POST'])
def register_user(request):
    username = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    # Validate and create the user
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
    elif User.objects.filter(email=email).exists():
        return Response({"error": "Email already registered"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

# Get JWT token for login
@api_view(['POST'])
def login_user(request):
    from rest_framework_simplejwt.views import TokenObtainPairView
    return TokenObtainPairView.as_view()(request)


def get_todos(request):
    todos = [
        {"id": 1, "task": "Learn Django", "completed": False},
        {"id": 2, "task": "Build API", "completed": True}
    ]
    return JsonResponse(todos, safe=False)


def home(request):
    return render(request, 'index.html')
