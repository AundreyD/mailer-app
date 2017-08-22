from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import ListSerializer, EmailSerializer, UserSerializer
from .models import List, Email


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ListViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows List to be viewed or edited.
    """
    queryset = List.objects.all()
    serializer_class = ListSerializer


class EmailViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
    