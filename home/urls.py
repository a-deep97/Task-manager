from django.contrib import admin
from django.urls import path , include
from home import views
from django.views.generic import TemplateView

urlpatterns=[
    path('admin/',admin.site.urls),
    path('',views.index,name='index'),
    path('home',views.home,name='home'),
    path('projects',views.projects,name='projects'),
    path('task',views.task,name='task'),
    path('user',views.user,name='user')
]