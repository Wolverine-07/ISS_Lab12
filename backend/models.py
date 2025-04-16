from pydantic import BaseModel

# inserted BaseModel and changed name from int to str by navneet
class Item(BaseModel):
    name: str
    description: str

class User(BaseModel):
    username: str
    bio: str
    
    # You can raise your hands and give the answer to the chocolate question