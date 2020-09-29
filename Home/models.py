from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=122)
    email = models.EmailField(max_length=122)
    phone = models.CharField(max_length=14)
    desc = models.CharField(max_length=1000)
    date = models.DateField()

    def __str__(self):
        return self.name
  