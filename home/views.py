from django.shortcuts import render, HttpResponse
from TaskManager.databases.project import Project
from TaskManager.databases.employees import Employees
from TaskManager.databases.tasks import Tasks
from django.views.generic import TemplateView

# views

def index(request):
    return render(request,template_name='index.html')

def home(request):
    return render(request,template_name='template/home.html')

def projects(request):
    return render(request,'projects.html')

def task(request):
    return render(request,'task.html')

def user(request):
    return render(request,'user.html')