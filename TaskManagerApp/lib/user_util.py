
import bcrypt
from TaskManagerApp.db_utils.tasks import Tasks
from TaskManagerApp.lib.constants.status import Status
from TaskManagerApp.db_utils.users import User, Users

class UserUtil:

    """
    A utility class for task related operations
    """
    @classmethod
    def add_user(cls,**kwargs):

        #   all fields are compulsory
        params={
            "emp_id":kwargs.get("emp_id"),
            "name":kwargs.get("name")
        }
        user=User()
        user.initiate(**params)
        user.add_user()
        return params
    
    @classmethod
    def create_user(cls,**kwargs):
        
        password=kwargs.get('password')
        unique_salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'),unique_salt)
        params={
            "username":kwargs.get('username'),
            "secure_password":hashed_password.decode('utf-8'),
            "unique_salt":unique_salt.decode('utf-8'),
            "first_name":kwargs.get('first_name'),
            "last_name":kwargs.get('last_name'),
            "email":kwargs.get('email'),
            "date_joined":kwargs.get('date_joined'),
            "last_login":kwargs.get('last_login')
        }
        user=Users()
        user.initiate(**params)
        user.create_user()

    @classmethod
    def login_user(cls,username,password):

        unique_salt = Users().get_unique_salt(username)
        password_hash=bcrypt.hashpw(password.encode('utf-8'),unique_salt.encode('utf-8'))
        user=Users().login_user(username,password_hash.decode('utf-8'))
        if user:
            return {
                "user_id":user[0]
            }
        return user
