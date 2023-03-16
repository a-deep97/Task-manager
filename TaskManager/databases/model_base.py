from typing import List
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
        with connection.cursor() as cursor:
            cursor.execute(query,params)
    
    def update(self):
        # TODO
        return None
    
    def delete(self):
        # TODO
        return None