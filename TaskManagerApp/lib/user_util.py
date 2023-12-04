
import bcrypt
from TaskManagerApp.db_utils.users import Users

class UserUtil:

    """
    A utility class for task related operations
    """
    
    @classmethod
    def create_user(cls,**kwargs):
        
        password=kwargs.get('password')
        unique_salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'),unique_salt)
        params={
            "username":kwargs.get('username'),
            "secure_password":hashed_password.decode('utf-8'),
            "unique_salt":unique_salt.decode('utf-8'),
            "firstname":kwargs.get('firstname'),
            "lastname":kwargs.get('lastname'),
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
        if not unique_salt:
            raise Exception("User not found !")
        password_hash=bcrypt.hashpw(password.encode('utf-8'),unique_salt.encode('utf-8'))
        user=Users().login_user(username,password_hash.decode('utf-8'))
        return user
