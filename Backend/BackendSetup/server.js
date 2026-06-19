// Backend Rules To Write Code

// step - 1: Importing all Required modules whatever we want to use in our backend application
// use - require ('module-name') method to Import modules

const express = require('express');

// InBuilt express function to create an express application which is inside the express module
// step - 2:create an Express application

const app = express();

// step - 3:Define Routes - API Endpoints

// use - app.METHODNAME(PATH, HANDLER) Method to define routes

app.get("/login" , (req,res)=>{

     res.send("fill the form to login / good evening user")
})

app.get("/signup" , (req,res)=>{

    res.send ("fill the form to signup / good morning user")

})

// step - 4 : start the server
// port.port is like a address on Interner . which Acts Like my backend address . so that fronted can communicate using this port

//we have different free ports like 3000 , 5000 , 8000 , 8080 . we can use any of these ports to start our server.

// syntax to start server - app.listern(PORT , function)

app.listen(8000 , ()=>{
   console.log("Server Started On Port 8000 http://localhost:8000 ");
})