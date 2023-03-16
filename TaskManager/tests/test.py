import sys
sys.path.append("..")
from databases.project import Project


proj=Project()
proj.initiate(title="demo project",description="demo project description")
proj.create_project()
