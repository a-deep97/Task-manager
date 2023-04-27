
from typing import Dict
from TaskManagerApp.db_utils.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status

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
            "proj_id":kwargs.get("proj_id"),
            "owner":kwargs.get("owner"),
            "description":kwargs.get("description"),
            "status":kwargs.get("status",Status.Unknown.name),
            "target":kwargs.get("target"),
        }
        task.initiate(**params)
        task.create_task()
        return params

    @classmethod
    def get_tasks(cls,params:Dict=None):
        
        data=[]
        if not params:
    
            res=Tasks().get_all_tasks()
            for each in res:
                entity={
                    TASK_ID_KEY:each[0],
                    TASK_TITLE_KEY:each[1],
                    PROJET_ID_KEY:each[2],
                    OWNER_KEY:each[3],
                    TASK_DESC_KEY:each[4],
                    STATUS_KEY:each[5],
                    TARGET_KEY:each[6],
                }
                data.append(entity)
        return data