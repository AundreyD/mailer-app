from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, response, permissions
from .serializers import ListSerializer, EmailSerializer, UserSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import List, Email

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

    def retrieve(self, request, pk=None):
        if pk == 'i':
            print(pk)
            print(response.Response(UserSerializer(request.user,
                                     context={'request': request}).data))
            return response.Response(UserSerializer(request.user,
                                     context={'request': request}).data)
        return super(UserViewSet, self).retrieve(request, pk)


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
    