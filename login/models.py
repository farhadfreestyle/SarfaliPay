from django.db import models

# Create your models here.

class UserData(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    unique_id = models.CharField(blank=False, max_length=10)
    birth = models.DateField()



    def __str__(self):
        return self.first_name



class Login(models.Model):
    unique_id = models.CharField(blank=False, max_length=10)
    password = models.CharField(max_length=20, )



    def __str__(self):
        return self.unique_id





    

    