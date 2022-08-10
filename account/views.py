from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect



def dahsboard(request):
    return render(request, 'account/main.html')





