import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt  
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from TaskManagerApp.db_utils.task_activities import TaskActivities
from TaskManagerApp.lib.project_util import ProjectUtil
from TaskManagerApp.lib.task_activities_util import TaskActivitiesUtil

from TaskManagerApp.lib.task_util import TaskUtil
from TaskManagerApp.lib.user_util import UserUtil

def projects(request):
    return render(request,template_name='index.html')

@api_view(['POST'])
@csrf_exempt  
def registerUser(request):
    if request.method == 'POST':
        data=request.data
        try:
            user=UserUtil.create_user(**data)
            return Response(data)
        except Exception as exc:
            return Response({'error': f'Could not register user {str(exc)}'}, status=500)

@api_view(['POST'])
@csrf_exempt
def loginUser(request):
    if request.method == 'POST':
        data = request.data
        user=UserUtil.login_user(**data)
        if user:
            request.session['user_id'] = user['id']
            request.session['username'] = user['username']
            request.session['is_authenticated'] = True
            request.session.save()
            return Response(user)
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

@api_view(['POST'])
@csrf_exempt
def logoutUser(request):
    if request.method == 'POST':
        request.session['user_id'] = None
        request.session['username'] = None
        request.session['is_authenticated'] = False
        request.session.flush()
        response = Response({'message': 'Successfully logged out'})
        response.set_cookie('sessionid','')
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def getProjectDetail(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    key=request.GET.get('key')
    param=request.GET.get('param')
    if not key and param:
        return
    data =ProjectUtil.get_project_data(key=key,param=param)
    return Response(data)

@api_view(['GET'])
def getProjectList(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    key = request.GET.get('key')
    param = request.GET.get('param')
    key = None if key=='null' else key
    param = None if param=='null' else param

    data = ProjectUtil.get_projects(key=key,param=param)
    return Response(data)

@api_view(['GET'])
def getTaskDetail(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    key = request.GET.get('key')
    param = request.GET.get('param')
    data=TaskUtil.get_task_data(key=key,param=param)
    return Response(data)

@api_view(['GET'])
def getMyTaskList(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    user=request.session['user_id']
    data = TaskUtil.get_tasks(**{"owner":user})
    return Response(data)

@api_view(['GET','POST'])
def createTask(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    
    if request.method == 'POST':
        data = request.data
        data["author"]=request.session['user_id']
        try:
            res = TaskUtil.create_task(**data)
        except Exception as exc:
            return Response({'error': f'Task could not be created {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET','POST'])
def createProject(request):
    if not request.session.get('is_authenticated'):
        return Response({'error': 'Unauthorized access'}, status=401)
    if request.method == 'POST':
        data = request.data
        try:  
            res = ProjectUtil.create_project(**data)
        except Exception as exc:
            return Response({'error': f'Task could not be created {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

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
        data["author"]=request.session["user_id"] 
        try:
            res=TaskActivitiesUtil.create_comment(**data)
        except Exception as exc:
            return Response({'error': f'Could not create comment {str(exc)}'}, status=500)

        return Response(res)
    
    return Response({'error': 'Invalid request method'}, status=400)

@api_view(['GET'])
def getActivities(request):
    task_id=request.GET.get("task_id")
    try:
        res = TaskActivitiesUtil.get_activities(int(task_id))
    except Exception as exc:
        return Response({'error': f'Could not fetch activities {str(exc)}'}, status=500)
    return Response(res)