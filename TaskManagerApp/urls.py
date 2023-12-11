from django.contrib import admin
from django.urls import path
from TaskManagerApp import views
from django.views.generic import TemplateView


urlpatterns=[
    path('',views.projects,name='projects'),
    path('signup',views.registerUser),
    path('login',views.loginUser),
    path('logout',views.logoutUser),
    path('projects',views.getProjectList),
    path('project',views.getProjectDetail),
    path('my_tasks',views.getMyTaskList),
    path('task',views.getTaskDetail),
    path('task/create',views.createTask),
    path('project/create',views.createProject),
    path('suggestions',views.getSuggestions),
    path('status_update',views.update_status),
    path('target_update',views.update_target),
    path('task/activities/create',views.createComment),
    path('task/activities/list',views.getActivities)
]