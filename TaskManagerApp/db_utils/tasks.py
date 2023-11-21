
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
                project:str,
                owner:str="",
                description:str="",
                status:Status=Status.Unknown.name,
                target:Any=""):
        self.title=title
        self.project=project
        self.owner=owner
        self.description=description
        self.status=status
        self.target=target
    
    def create_task(self):
        params=[self.title,self.project,self.owner,self.description,self.status,self.target]
        query=f"""
            INSERT INTO {self.table}
            (title,project,owner,description,status,target)
            VALUES (%s,%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def query_tasks(self,key:str, param:str):
        query=f"""
            SELECT * FROM {self.table}
        """
        if key and param:
            query+=f"\n WHERE {key} = "
            if param.isdigit():
                param=int(param)
                query+=f"{param}"
            else:
                query+=f"'{param}'"
        return self.read_all(query,None)

    def query_task_data(self,key:str,param:str):
        query=f"""
            SELECT * FROM {self.table}
            WHERE {key} = {param}
        """
        if param.isdigit():
            param=int(param)
        return self.read(query,None)

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
    
    def update_status(self,status,id):
        query=f"""
            UPDATE {self.table}
            SET
            status = '{status.name}'
            WHERE
            id = {id}
        """
        self.update(query,None)
        return status.name
    
    def update_target(self,target,id):
        return super().update_target(self.table,target,id)