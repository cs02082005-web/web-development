const express = require ("express")
const cors = require("cors")

const app = express()

// middleware

// enable the cors so we can share resources even through having different address
app.use(cors()) 

app.use(express.json())

app.post("/login" , (req,res)=>{

    // fronted
    const {name ,email} = req.body 

    console.log(name)

    // simple validation

    if(name && email){
        res.json({message :`welcome to my website ${name}` })
    }else{
        res.status(400).json({message : `name and email are required`})
    }

});

app.listen(3000 , ()=>{
    console .log("server running at http://localhost:3000")
})