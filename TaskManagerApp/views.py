from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from TaskManagerApp.db_utils.task_activities import TaskActivities
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
    return Response(data)

@api_view(['GET'])
def getTaskDetail(request):
    key = request.GET.get('key')
    param = request.GET.get('param')
    data=TaskUtil.get_task_data(key=key,param=param)
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
def update_status(request):

    if request.method == 'POST':
        data=request.data
        status_for=data.get('status_for')
        status=data.get('status')
        if status=="None":
            status="Unknown"
        id=data.get('id') 
        try:
            if status_for=="project":
                res = ProjectUtil.update_project_status(status,id)
            else:
                res = TaskUtil.update_task_status(status,id)
        except Exception as exc:
            return Response({'error': f'Could not update status {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET','POST'])
def update_target(request):
    if request.method == 'POST':
        data=request.data
        target_for=data.get('target_for')
        target=data.get('target')
        id=data.get('id') 
        try:
            print(data)
            if target_for=="project":
                res = ProjectUtil.update_project_target(target,id)
            else:
                res = TaskUtil.update_task_target(target,id)
        except Exception as exc:
            return Response({'error': f'Could not update target {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)


@api_view(['GET','POST'])
def createComment(request):
    if request.method == 'POST':
        data=request.data 
        try:
            res=TaskActivities.create_comment(**data)
        except Exception as exc:
            return Response({'error': f'Could not update target {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def getActivities(request):
    task_id=request.GET.get("task_id")
    try:
        res = TaskActivities.get_activities(task_id)
    except Exception as exc:
        return Response({'error': f'Could not fetch activities {str(exc)}'}, status=500)
    return Response(res)