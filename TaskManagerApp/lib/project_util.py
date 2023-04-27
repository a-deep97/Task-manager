from typing import Dict
from TaskManagerApp.db_utils.project import Project
from TaskManagerApp.lib.constants.status import Status

PROJECT_TITLE_KEY="title"
PROJECT_ID_KEY="id"
PROJECT_DESC_KEY="description"
STATUS_KEY="status"
OWNER_KEY="owner"

class ProjectUtil:
    
    """
    A utility class for project related operations
    """

    @classmethod
    def create_project(cls,**kwargs):
        
        params={
            "title":kwargs.get("title","Unknown title"),
            "description":kwargs.get("description"),
            "status":kwargs.get("status",Status.Unknown.name),
            "owner":kwargs.get("owner"),
            "target":kwargs.get("target"),
        }
        project=Project()
        project.initiate(**params)
        project.create_project()
        return params
    
    @classmethod
    def query_projects(cls,key:str=None,param:str=None):
        
        data=[]
       
        res=Project().get_projects(key,param)
        for each in res:
            entity={
                PROJECT_ID_KEY:each[0],
                PROJECT_TITLE_KEY:each[1],
                PROJECT_DESC_KEY:each[2],
                STATUS_KEY:each[3],
                OWNER_KEY:each[4],
            }
            data.append(entity)
        return data
