from enum import Enum
import sys

from typing import Any
from .model_base import ModelBase
from TaskManager.constants.status import Status


TABLE="project"
 
class Project(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE

    def initiate(self,
                 title:str,
                 description:str="",
                 status:Status=Status.Unknown,
                 emp_id:str="",
                 target:Any=""):
        
        self.title=title
        self.description=description
        self.status=status
        self.target=target
        self.emp_id=emp_id

    def create_project(self):
        params=[self.title,self.description,self.status,self.emp_id,self.target]
        query=f"""
            INSERT INTO {self.table}
            (title,description,status,emp_id,target)
            VALUES (%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def get_all_projects(self):
        query=f"""
            SELECT * FROM {self.table}
        """
        return self.read_all(query,None)

    def update_project(self):
        return
    