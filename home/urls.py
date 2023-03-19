from django.contrib import admin
from django.urls import path , include
from home import views

urlpatterns=[
    path('admin/',admin.site.urls),
    path('',views.home,name='home'),
    path('projects',views.projects,name='projects'),
    path('task',views.task,name='task'),
    path('user',views.user,name='user')
]