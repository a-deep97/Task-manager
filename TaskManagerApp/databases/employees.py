
from .model_base import ModelBase

TABLE="employees"

class Employees(ModelBase):
    def __init__(self) -> None:
        super().__init__()
        self.table=TABLE
    
    def initiate(self,
                 emp_id:str,
    ):
        self.emp_id=emp_id
    