
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
                project:int,
                author:int,
                creation_date,
                creation_time,
                owner:str="",
                description:str="",
                status:Status=Status.Unknown.name,
                target:Any="",
                ):
        self.title=title
        self.project=project
        self.owner=owner
        self.description=description
        self.status=status
        self.target=target
        self.author=author
        self.creation_date=creation_date
        self.creation_time=creation_time
    
    def create_task(self):
        params=[self.title,self.project,self.owner,self.description,self.status,self.target,self.author,self.creation_date,self.creation_time]
        query=f"""
            INSERT INTO {self.table}
            (title,project,owner,description,status,target,author,creation_date,creation_time)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """
        return self.insert(query=query,params=params)
         
    def query_tasks(self,**conditions):
        query=f"""
            SELECT * FROM {self.table}
        """
        params=[]
        if conditions:
            query+=" WHERE "
            for key,val in conditions.items():
                query+=f"\n {key} = %s"
                params.append(val)
        return self.read_all(query,params)

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