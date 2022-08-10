from django.shortcuts import render
from django.http import HttpResponse
from login.services import *
from login.models import * 
from django.contrib.auth.forms import UserCreationForm
# Create your views here.

# def login(request):
#     form = login_forms
#     # data = {
#     #     'forms':form
#     # }
#     return render(request, 'login/index.html')



# def register(request):
#     # form = UserCreationForm()
#     # context = {'form':form}
#     return render(request, 'registration/login.html')
