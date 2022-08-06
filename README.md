# GraphQLUsingNode
Implementation of graphQL using node JS

To run project follow below commands

1. Clone  the repo
   
2. Start the server.js file using nodemon server.js
   
   npx nodemon server.js
   
3. open the browser and hit http://localhost:3000/graphql

4. on the  console call the functions we have written in the index.js file
   
    e.g.
   
       query {
       
            getUserIdAndName {
               id,
               name
           }
       
       }

5. To test mutation first hit createUser request
   
   `mutation {
      createUser(
         id: 5,
         name:"asfds"
         email: "asfds@sadf"
      ){
         name,
         email
      }
   }`
   
   then call getUserDetails
   
   `query{
      getUserDetails{
         id,
         name,
         email
      }
   }`
   
   you can see the added record in the response.

### Important Link
https://www.youtube.com/playlist?list=PLolI8AY2AS9YmT5mBp8eM59fOCOS6i6u0
