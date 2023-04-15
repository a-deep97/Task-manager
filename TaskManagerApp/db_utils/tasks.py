
from enum import Enum
from typing import Any, Dict
from .model_base import ModelBase
from TaskManagerApp.lib.constants.status import Status
    
TABLE="tasks"

class Tasks(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE
    
    def initiate(self,
                title:str,
                proj_id:str,
                emp_id:str="",
                description:str="",
                status:Status=Status.Unknown.name,
                target:Any=""):
        self.title=title
        self.proj_id=proj_id
        self.emp_id=emp_id
        self.description=description
        self.status=status
        self.target=target
    
    def create_task(self):
        params=[self.title,self.proj_id,self.emp_id,self.description,self.status,self.target]
        query=f"""
            INSERT INTO {self.table}
            (title,proj_id,emp_id,description,status,target)
            VALUES (%s,%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def get_all_tasks(self,user:str=None):
        query=f"""
            SELECT * FROM {self.table}
        """
        if user:
            query=query + f"WHERE emp_id='{user}'"
        return self.read_all(query,None)
    
    def update_task(self,columns:Dict[str,Any],clauses:Dict[str,Any]):
        query=f"""
            UPDATE {self.table}
            SET
        """
        for key , val in columns.items():
            query = query + f" {key} = '{val}' "
        
        if clauses:
            query+= f"WHERE \n"
            for key , val in clauses:
                query =query + f" {key}= '{val}'"
        self.update(query,None)