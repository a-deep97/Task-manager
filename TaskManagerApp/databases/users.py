
from typing import Any, Dict
from .model_base import ModelBase

TABLE="users"

class User(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE
    
    def initiate(self,
                 emp_id:str,name:str
    ):
        self.emp_id=emp_id
        self.name=name

    def add_user(self):
        params=[self.emp_id,self.name]
        query=f"""
        INSERT INTO {self.table}
        (emp_id,name)
        VALUES (%s,%s)
        """
        self.insert(query=query,params=params)
    
    def get_emp_data(self,clauses:Dict[str,Any]):

        query=f"""
        SELECT * FROM {self.table}
        """    
        if clauses:
            query =query + " WHERE "
            for key , val in clauses.items():
                query=query + f"{key} = '{val}'"
        return self.read(query,None)