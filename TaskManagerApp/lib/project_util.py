from TaskManagerApp.databases.project import Project
from TaskManagerApp.lib.constants.status import Status

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
