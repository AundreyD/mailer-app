from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class List(models.Model):
    """
    
    """
    owner = models.ForeignKey(User)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name 


class Email(models.Model):
    """

    """

    name = models.CharField(max_length=50)
    email = models.EmailField()
    email_list = models.ForeignKey(List)

    def __str__(self):
        return self.name 