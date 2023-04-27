from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from TaskManagerApp.lib.project_util import ProjectUtil

from TaskManagerApp.lib.task_util import TaskUtil
from TaskManagerApp.lib.user_util import UserUtil
from .db_utils.project import Project
from .db_utils.tasks import Tasks

def projects(request):
    return render(request,template_name='index.html')

@api_view(['GET'])
def getProjectList(request):
    key = request.GET.get('key')
    param = request.GET.get('param')
    key = None if key=='null' else key
    param = None if param=='null' else param
    data = ProjectUtil.get_projects(key=key,param=param)
    
    return Response(data)

@api_view(['GET'])
def getTaskList(request):
    key = request.GET.get('key')
    param = request.GET.get('param')
    key = None if key=='null' else key
    param = None if param=='null' else param
    data = TaskUtil.get_tasks(key=key,param=param)
    return Response(data)

@api_view(['GET','POST'])
def createTask(request):
    data={}
    res=TaskUtil.create_task(**data)
    return Response(res)

@api_view(['GET','POST'])
def createProject(request):
    data={
        "title":"project 5",
        "description":"this is project 5",
        "status":"",
        "owner":"4",
        "target":"no target"
    }
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
