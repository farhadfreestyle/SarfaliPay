from django.shortcuts import render
from django.shortcuts import redirect
from cards.services import *

def afterurls(request):
    data = {
        'data':cleaned_data
    }
    return render(request, 'account/main_crack.html', context=data)


