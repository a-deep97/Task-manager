
from typing import Dict
from TaskManagerApp.db_utils.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status
from TaskManagerApp.lib.project_util import ProjectUtil

TABLE="tasks"
TASK_ID_KEY="id"
TASK_TITLE_KEY="title"
PROJET_ID_KEY="project"
OWNER_KEY="owner"
TASK_DESC_KEY="description"
STATUS_KEY="status"
TARGET_KEY="target"

class TaskUtil:
    """
    A utility class for task related operations
    """

    @classmethod
    def create_task(cls,**kwargs):
        task=Tasks()
        params={
            "title":kwargs.get("title","Unknown title"),
            "project":kwargs.get("project"),
            "owner":kwargs.get("owner"),
            "description":kwargs.get("description"),
            "status":kwargs.get("status",Status.Unknown.name),
            "target":kwargs.get("target"),
        }
        task.initiate(**params)
        task.create_task()
        return params

    @classmethod
    def get_tasks(cls,key:str=None,param:str=None):
        
        data=[]
        res=Tasks().query_tasks(key,param)
        for each in res:
            project=None #ProjectUtil.get_Name_from_ID(int(each[2]))
            entity={
                TASK_ID_KEY:each[0],
                TASK_TITLE_KEY:each[1],
                PROJET_ID_KEY:project,
                OWNER_KEY:each[3],
                TASK_DESC_KEY:each[4],
                STATUS_KEY:each[5],
                TARGET_KEY:each[6],
            }
            data.append(entity)
        return data

    @classmethod
    def get_task_data(cls,key:str,param:str):
        data={}
        res=Tasks().query_task_data(key,param)
        project=ProjectUtil.get_Name_from_ID(int(res[2]))
        data={
            TASK_ID_KEY:res[0],
                TASK_TITLE_KEY:res[1],
                PROJET_ID_KEY:project,
                OWNER_KEY:res[3],
                TASK_DESC_KEY:res[4],
                STATUS_KEY:res[5],
                TARGET_KEY:res[6],
        }

        return data
    
    @classmethod
    def get_list(cls,column,input_value):
        
        column_list=[]
        res=Tasks().get_list(TABLE,column,input_value)
        for each in res:
            column_list.append(each[0])
        return column_list

    @classmethod
    def update_task_status(cls,status:str,id:int):
        return Tasks().update_status( Status[status],id)

    @classmethod
    def update_task_target(cls,target:str,id:int):
        return Tasks().update_target(target,id)