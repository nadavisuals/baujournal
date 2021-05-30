## Project Setup
- In terminal go to folder 'server': npm install
- In terminal go to folder 'client': npm install

- In the folder 'server' go to the .env file and add your MongoDB database path at 'DATABASE' (Local MongoDB or MongoDB Atlas)

- Create User and PW for Login
with Postman add a new user
--> Collection with name 'users'

Post: http://localhost:5001/user/register
{
    "email": "user@test.com",
    "password": "user@test",
    "passwordCheck": "user@test"
}


## Start App 
Go to folder 'server': nodemon server
Go to folder 'client': npm start