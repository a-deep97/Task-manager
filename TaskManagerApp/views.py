from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .databases.project import Project
from .databases.tasks import Tasks

def projects(request):
    return render(request,template_name='index.html')

@api_view(['GET'])
def getProjectList(request):

    data=Project().get_all_projects()
    
    return Response(data)

@api_view(['GET'])
def getTaskList(request):
    data=Tasks().get_all_tasks()
    return Response(data)

@api_view(['GET','POST'])
def createTask(request):
    task=Tasks()
    task.initiate("dummy task","1","1234")
    task.create_task()
    return Response(str(task))