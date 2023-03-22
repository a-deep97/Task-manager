from django.shortcuts import render

def projects(request):
    return render(request,template_name='index.html')
