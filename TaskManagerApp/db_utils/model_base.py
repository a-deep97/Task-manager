from typing import Any, Dict, List
from django.db import connection

class ModelBase(object):
    def __init__(self) -> None:
        pass

    def read(self,query:str,params:List=None):
        
        with connection.cursor() as cursor:
            cursor.execute(query,params)
            row=cursor.fetchone()                                       
        return row
    
    def read_all(self,query:str,params:List):

        with connection.cursor() as cursor:
            cursor.execute(query,params)
            rows=cursor.fetchall()
        return rows
    
    def read_many(self,query:str,params:List):
        # TODO
        return
        
    def insert(self,query:str,params:List):
        last_inserted_id=None
        with connection.cursor() as cursor:
            cursor.execute(query,params)
            last_inserted_id = cursor.lastrowid
            return last_inserted_id
        
    def update(self,query:str,params:List):
        with connection.cursor() as cursor:
            cursor.execute(query,params)

    def get_list(self,table,column,input_value):
        query=f"""
        SELECT {column} FROM {table}
        WHERE {column} like '%{input_value}%'
        """
        return self.read_all(query,None)

    def delete(self):
        # TODO
        return None
    
    def update_target(self,table,target,id):
        query=f"""
        UPDATE {table}
        SET
        target = '{target}'
        WHERE
        id = {id}
        """
        print(query)
        self.update(query,None)
        return target