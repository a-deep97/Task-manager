
from TaskManagerApp.databases.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status


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
            "emp_id":kwargs.get("emp_id"),
            "description":kwargs.get("description"),
            "status":kwargs.get("status",Status.Unknown.name),
            "target":kwargs.get("target"),
        }
        task.initiate(**params)
        task.create_task()
        return params