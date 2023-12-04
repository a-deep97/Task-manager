
from typing import Any, Dict
from .model_base import ModelBase

TABLE="users"

class Users(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE
    
    def initiate(self,
        username:str,
        secure_password:str,
        unique_salt:str,
        firstname:str,
        lastname:str,
        email:str,
        date_joined:str,
        last_login:str
    ):
        self.username=username
        self.secure_password=secure_password
        self.unique_salt=unique_salt
        self.first_name=firstname
        self.last_name=lastname
        self.email=email
        self.date_joined=date_joined
        self.last_login=last_login

    def create_user(self):
        
        params=[self.username,
                self.first_name,
                self.last_name,
                self.email,
                self.secure_password,
                self.unique_salt,
                self.date_joined,
                self.last_login]
        query=f"""
        INSERT INTO {self.table}
        (username,firstname,lastname,email,secure_password,unique_salt,date_joined,last_login)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
        """
        self.insert(query=query,params=params)
    
    def login_user(self,username,password):
        
        params=[username,password]
        query=f"""
        SELECT id , username FROM {self.table}
        WHERE
        username = %s
        AND
        secure_password = %s
        """
        res = self.read(query,params)
        if res:
            return {
                'id':res[0],
                'username':res[1]
            }
        return None
    
    def get_unique_salt(self,username):
        
        params=[username]
        query=f"""
        SELECT unique_salt FROM {self.table}
        WHERE
        username = %s
        """
        res=self.read(query,params)
        if res:
            return res[0]
        return None