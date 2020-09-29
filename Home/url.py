from django.contrib import admin
from django.urls import path, include
from Home import views
urlpatterns = [
    path("", views.index, name='Home'),
    path("tm", views.tm, name='Trending Misinformation'),
    path("lu", views.lu, name='Latest Updates'),
    path("qc", views.qc, name='Quick Check'),
    path("eg", views.eg, name='eSaftey Guru'),
    path("cu", views.cu, name='Contact Us'),
]
