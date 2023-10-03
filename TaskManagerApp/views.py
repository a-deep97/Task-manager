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
def getProjectDetail(request):
    key=request.GET.get('key')
    param=request.GET.get('param')
    if not key and param:
        return
    data =ProjectUtil.get_project_data(key=key,param=param)
    return Response(data)

@api_view(['GET'])
def getProjectList(request):
    key = request.GET.get('key')
    param = request.GET.get('param')
    key = None if key=='null' else key
    param = None if param=='null' else param

    data = ProjectUtil.get_projects(key=key,param=param)
    print(f"data:{data}")
    return Response(data)

@api_view(['GET'])
def getTaskDetail(request):
    key = request.GET.get('key')
    param = request.GET.get('param')
    data=TaskUtil.get_task_data(key=key,param=param)
    print(data)
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
    if request.method == 'POST':
        data = request.data
        try:
            print("data:",data)
            res = TaskUtil.create_task(**data)
        except Exception as exc:
            return Response({'error': f'Task could not be created {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET','POST'])
def createProject(request):
    if request.method == 'POST':
        data = request.data
        try:  
            res = ProjectUtil.create_project(**data)
        except Exception as exc:
            return Response({'error': f'Task could not be created {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def getUserTasks(request):
    name="aman"
    res=UserUtil().get_user_tasks(name=name)
    return Response(res)

@api_view(['GET'])
def getSuggestions(request):
    suggestions=[]
    column=request.GET.get('column')
    table=request.GET.get('table')
    input_value=request.GET.get('input')
    if not (column and table and input_value):
        return
    if table=="project":
        suggestions=ProjectUtil().get_list(column,input_value)
    elif table=="tasks":
        suggestions=TaskUtil().get_list(column,input_value)
    else:
        pass
    return Response({'suggestions': suggestions})
    
@api_view(['GET','POST'])
def newUser(request):
    data={"emp_id":"1234","name":"aman"}
    res=UserUtil.add_user(**data)
    return Response(res)
