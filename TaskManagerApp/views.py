from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from TaskManagerApp.lib.project_util import ProjectUtil

from TaskManagerApp.lib.task_util import TaskUtil
from TaskManagerApp.lib.user_util import UserUtil
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
    data={}
    res=TaskUtil.create_task(**data)
    return Response(res)

@api_view(['GET','POST'])
def createProject(request):
    data={}
    res=ProjectUtil.create_project(**data)
    return Response(res)

@api_view(['GET'])
def getUserTasks(request):
    name="aman"
    res=UserUtil().get_user_tasks(name=name)
    return Response(res)

@api_view(['GET','POST'])
def newUser(request):
    data={"emp_id":"1234","name":"aman"}
    res=UserUtil.add_user(**data)
    return Response(res)
