
from django.db import models

# Create your models here.
class Contact(models.Model):
     name = models.CharField(max_length=100)
     email = models.EmailField(max_length=100)
     telephone = models.IntegerField()
     date = models.DateField()
     service = models.CharField(max_length=100)
     message = models.TextField(max_length=200) 

     def __str__(self):
        return "{}".format(self.name)