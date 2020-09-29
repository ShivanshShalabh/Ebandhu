from django.shortcuts import render, HttpResponse
from datetime import datetime
from Home.models import Contact
from django.contrib import messages

# Create your views here.

def index(request):
   return render (request,'Home.html')
def tm(request):
   return render (request,'tm.html')
def lu(request):
   return render (request,'lu.html')
def qc(request):
   return render (request,'ayd.html')
def eg(request):
   return render (request,'learn.html')
def cu(request):
   if request.method == "POST":
      name= request.POST.get('name')
      email= request.POST.get('email')
      phone= request.POST.get('phone')
      desc= request.POST.get('desc')
      contact = Contact(name=name, phone=phone, email=email, desc=desc, date=datetime.today())
      contact.save()
      messages.success(request, 'Your response has been successfully recorded.')
      return render (request,'curedirect.html')
   return render (request,'contactus.html')