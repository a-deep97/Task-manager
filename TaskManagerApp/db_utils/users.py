
from typing import Any, Dict
from .model_base import ModelBase

TABLE="users"

class Users(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE
    
    def initiate(self,
        username:str,
        password:str,
        first_name:str,
        last_name:str,
        email:str,
        date_joined:str,
        last_login:str
    ):
        self.username=username
        self.password=password
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.date_joined=date_joined
        self.last_login=last_login

    def add_user(self):
        
        params=[self.username,
                self.first_name,
                self.last_name,
                self.email,
                self.password,
                self.date_joined,
                self.last_login]
        query=f"""
        INSERT INTO {self.table}
        (username,firstname,lastname,email,password,unique_salt,date_joined,last_login)
        VALUES (%s,%s)
        """
        self.insert(query=query,params=params)
    
    def login_user(self,username,password):
        
        params=[username,password]
        query=f"""
        SELECT id FROM {self.table}
        WHERE
        user_name = '%s
        AND
        password = '%s'
        """
        res = self.read(query,params)
        if res:
            return res[0]
        return None