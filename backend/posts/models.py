from django.db import models

# Create your models here.

class Post(models.Model):
    
    """ Postt Model Definition"""
    
    title = models.CharField(max_length=50, default="")
    content = models.CharField(max_length=50, default="")
    
