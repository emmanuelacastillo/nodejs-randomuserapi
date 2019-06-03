# Random User API

### Objective:
 
Create an API in Node.js/Express exposing 3 endpoints to GET and POST random user data!
We want to make asynchronous requests from within our API to retrieve our data initially from a 3rd party API ("https://randomuser.me/api").
Below are the details of the requirements and endpoints. Good luck!

### Requirements:
1. Node version > 4.x
2. Express version 4
3. Asynchronous request module of your choice.
4. Asynchronous handling using either callacks, promises or async/await
5. Client of your choice to perform requests to your API (i.e. Postman etc).

Software Used:
1. Nodejs 12.3.1
2. Express 4.0.0
3. Asynchronous request module - Axios
5. Client - Postman

### Assumptions:
1. https://randomuser.me/api will always be up.
2. https://randomuser.me/api will never produce an error response.
3. https://randomuser.me/api will always return different users.
4. https://randomuser.me/api will always send a response at a reasonable time.
5. https://randomuser.me/api will always return a value.
6. Application server will never run out of memory.
7. Application server will never run into a system error.
8. GET /user/firstname/:firstname will only return 1 data.

### Running Application
Required Software:
1. git
2. nodejs

Directions:
1. Open a terminal (e.g. PowerShell)
1. In the terminal, git clone https://github.com/emmanuelacastillo/nodejs-randomuserapi.git
2. In the terminal, cd nodejs-randomuserapi
3. In the terminal, npm install
4. In the terminal, npm run

### Client:
Required Software:
1. Postman Application

Directions:
1. Open Postman
2. From Postman, New->Import->Choose Files: Refer to file client_postman/RandomUserApi.postman_collection

Now, the following 3 requests should be accessible through Postman:
1. Get Users: localhost:3000/users
2. Post Users: localhost:3000/users
  - Body:
    {
      "gender": "male",
      "firstName": "eman",
      "city": "chula vista",
      "email": "test.com",
      "cell": "1234567"
     }
3. Get User By First Name: localhost:3000/firstname/eman

### Other Documentation:

Please open the file "/documentation_swagger/index.html" on your browser.
