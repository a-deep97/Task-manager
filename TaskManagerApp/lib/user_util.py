
from TaskManagerApp.db_utils.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status
from TaskManagerApp.db_utils.users import User

class UserUtil:

    """
    A utility class for task related operations
    """
    @classmethod
    def add_user(cls,**kwargs):

        #   all fields are compulsory
        params={
            "emp_id":kwargs.get("emp_id"),
            "name":kwargs.get("name")
        }
        user=User()
        user.initiate(**params)
        user.add_user()
        return params
    
    @classmethod
    def get_user_tasks(cls,name:str):
        emp_id=UserUtil.get_emp_id_from_name(name)
        tasks=Tasks().get_all_tasks(emp_id=emp_id)
        return tasks

    @classmethod
    def get_emp_id_from_name(cls,name):
        employee=User().get_emp_data({"name":name})
        return employee[1]