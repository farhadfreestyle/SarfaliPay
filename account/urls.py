from django.urls import path
from account import views


urlpatterns = [


    path('account/', views.dahsboard, name = 'dashboard'),
    # path('user/cards', views.afterurl, name = 'afterurl'),

   


]   