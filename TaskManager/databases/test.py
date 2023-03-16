
#from project import Project
from model_base import ModelBase

sql="""
select * from project
"""
base=ModelBase()
data=base.read(sql)
print(data)
"""
proj=Project()

proj.initiate(title="demo project",description="demo project description")

import pdb
pdb.set_trace()
proj.create_project()
"""