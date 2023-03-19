from django.shortcuts import render, HttpResponse
from TaskManager.databases.project import Project
from TaskManager.databases.employees import Employees
from TaskManager.databases.tasks import Tasks

# Create your views here.
def home(request):
    return render(request,'html/home.html')