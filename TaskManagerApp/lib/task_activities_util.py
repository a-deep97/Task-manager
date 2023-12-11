
from typing import Dict
from TaskManagerApp.db_utils.task_activities import TaskActivities
from TaskManagerApp.db_utils.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status
from TaskManagerApp.lib.project_util import ProjectUtil
from TaskManagerApp.lib.user_util import UserUtil

TABLE="TaskActivities"
TASK_ID_KEY="task_id"
COMMENT_KEY="comment"
ACTIVITY_KEY="activity"
AUTHOR_KEY="author"
ACTIVITY_DATE_KEY="activity_date"
ACTIVITY_TIME_KEY="activity_time"


class TaskActivitiesUtil:
    """
    A utility class for task activites related operations
    """

    @classmethod
    def create_comment(cls,**kwargs):
        comment=TaskActivities()
        params={
                "task_id":kwargs.get("task_id"),
                "comment": kwargs.get("comment"),
                "author": kwargs.get("author"),
                "activity_date":kwargs.get("activity_date"),
                "activity_time":kwargs.get("activity_time")
            }
        comment.initiate(
            **params
        )
        comment.create_comment()
        return params
    
    @classmethod
    def create_activity(cls,**kwargs):
        activity=TaskActivities()
        params={
            "task_id":kwargs.get("task_id"),
            "activity":kwargs.get("activity"),
            "author":kwargs.get("author"),
            "activity_date":kwargs.get("activity_date"),
            "activity_time":kwargs.get("activity_time")
        }
        activity.initiate(
            **params
        )
        activity.create_activity()
        return params

    @classmethod
    def get_activities(cls,task_id:int):
        data=[]
        res=TaskActivities().query_activities(task_id)
        for each in res:
            entity={
                ACTIVITY_KEY:each[3],
                COMMENT_KEY:each[2],
                AUTHOR_KEY:UserUtil.get_username_from_id(each[4]) if each[2] else None,
                ACTIVITY_DATE_KEY:each[6],
                ACTIVITY_TIME_KEY:each[7]
            }
            data.append(entity)
        return data
    
    @classmethod
    def edit_comment(cls,task_id,comment_order,updated_comment):
        return TaskActivities().update_comment(task_id,comment_order,updated_comment)
