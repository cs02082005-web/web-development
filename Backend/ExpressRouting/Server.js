const express =   require("express")

const app = express()

// middleware - security Check
app.use(express.json())

// API - Routes - URL

// 1.Fethch Data Of Restraunt
// get : Get The Data of Restraunt from server - easily able to show on fronted

app.get("/restraunts" , (req,res)=>{

    res.json({restrauntName : "mcdonanlds" })

})

// 2 . Place an Order
// post : send the data to the server

app.post("/order" , (req,res)=>{

    res.json({message : "order placed sucessfully"})
})

app.listen(3000 , ()=>{

    console.log("server running on http://localhost:3000")
})

