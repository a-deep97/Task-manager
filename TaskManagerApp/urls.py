from django.contrib import admin
from django.urls import path
from TaskManagerApp import views
from django.views.generic import TemplateView

urlpatterns=[
    path('',views.projects,name='projects'),
    path('projects',views.projects,name='projects'),
]