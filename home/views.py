from django.shortcuts import render, HttpResponse
from TaskManager.databases.project import Project
from TaskManager.databases.employees import Employees
from TaskManager.databases.tasks import Tasks

# views

def home(request):
    return render(request,'html/home.html')

def projects(request):
    return render(request,'html/projects.html')

def task(request):
    return render(request,'html/task.html')

def user(request):
    return render(request,'html/user.html')