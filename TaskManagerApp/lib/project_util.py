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
            "emp_id":kwargs.get("emp_id"),
            "target":kwargs.get("target"),
        }
        project=Project()
        project.initiate(**params)
        project.create_project()
        return params
    
    @classmethod
    def get_projects(cls,params:Dict=None):
        
        data=[]
        if not params:
    
            res=Project().get_all_projects()
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
