from django.contrib import admin
from django.urls import path
from TaskManagerApp import views
from django.views.generic import TemplateView


urlpatterns=[
    path('',views.projects,name='projects'),
    path('projects',views.getProjectList),
    path('project',views.getProjectDetail),
    path('tasks',views.getTaskList),
    path('task',views.getTaskDetail),
    path('task/create',views.createTask),
    path('project/create',views.createProject),
    path('new_user',views.newUser)
]