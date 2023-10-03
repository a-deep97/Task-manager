from typing import Dict
from TaskManagerApp.db_utils.project import Project
from TaskManagerApp.lib.constants.status import Status

TABLE="project"
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
    def get_projects(cls,key:str=None,param:str=None):
        
        data=[]
       
        res=Project().query_projects(key,param)
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

    @classmethod
    def get_project_data(cls,key:str,param:str):
        
        res=Project().query_project_data(key,param)
        data={
            PROJECT_ID_KEY:res[0],
                PROJECT_TITLE_KEY:res[1],
                PROJECT_DESC_KEY:res[2],
                STATUS_KEY:res[3],
                OWNER_KEY:res[4],
        }
        return data

    @classmethod
    def get_Name_from_ID(cls,project_id:int):
        name=None
        name=Project().ID_to_Name(project_id)
        return name[0]

    @classmethod
    def get_list(cls,column,input_value):
        
        column_list=[]
        res=Project().get_list(TABLE,column,input_value)
        print(res)
        for each in res:
            column_list.append(each[0])
        return column_list