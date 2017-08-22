from django.contrib.auth.models import User
from rest_framework import serializers
from .models import List, Email


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class ListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = List
        fields = ('id', 'owner', 'name')


class EmailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Email
        fields = ('id', 'name', 'email', 'email_list')