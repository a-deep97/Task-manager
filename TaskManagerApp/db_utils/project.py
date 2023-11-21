from enum import Enum
import sys

from typing import Any, Dict
from .model_base import ModelBase
from TaskManagerApp.lib.constants.status import Status


TABLE="project"
 
class Project(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE

    def initiate(self,
                 title:str,
                 description:str="",
                 status:Status=Status.Unknown,
                 owner:str="",
                 target:Any=""):
        
        self.title=title
        self.description=description
        self.status=status
        self.target=target
        self.owner=owner

    def create_project(self):
        params=[self.title,self.description,self.status,self.owner,self.target]
        query=f"""
            INSERT INTO {self.table}
            (title,description,status,owner,target)
            VALUES (%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def query_projects(self,key:str,param:str):
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
    
    def query_project_data(self,key:str,param:str):

        if param.isdigit():
            param=int(param)
        query=f"""
            SELECT * FROM {self.table}
            WHERE {key}={param}
        """
        return self.read(query,None)

    def update_project(self,columns:Dict[str,Any],clauses:Dict[str,Any]):
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
    
    def ID_to_Name(self,id:int):
        query=f"""
            SELECT title from {self.table}
            WHERE id= {id}
        """
        return self.read(query,None)
    
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