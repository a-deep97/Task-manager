from typing import Any, Dict
from .model_base import ModelBase


TABLE="TaskActivities"
 
class TaskActivities(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE

    def initiate(self,
                task_id:int,
                comment:str="",
                activity:str="",
                author:str="",
                activity_date:str="",
                activity_time:str="",
        ):
        
        self.task_id=task_id
        self.comment=comment
        self.activity=activity
        self.author=author
        self.activity_date=activity_date
        self.activity_time=activity_time

    def create_comment(self):
        params=[self.task_id,self.comment,self.author,self.activity_date,self.activity_time]
        query=f"""
            INSERT INTO {self.table}
            (task_id,comment,author,activity_date,activity_time)
            VALUES (%d,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
        return 
    
    def get_top_order(self,task_id):

        params=[task_id]
        query=f"""
            SELECT activity_order
            FROM {self.table}
            WHERE task_id = %s
            ORDER BY id DESC
            LIMIT 1
        """
        return self.read(query=query,params=params)

    def query_activities(self,task_id):

        params=[task_id]
        query=f"""
            SELECT * FROM {self.table}
            WHERE task_id = %s
            ORDER BY id DESC
        """
        return self.read_all(query=query,params=params)
