from django.urls import path
from apis import views


urlpatterns = [



    path('', views.get_api, name = 'afterurl'),

   


]   