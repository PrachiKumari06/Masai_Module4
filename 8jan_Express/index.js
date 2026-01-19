import express from 'express'
const app=express()
const port=3000;
app.get('/home',(req,res)=>{res.send("This is home page")})
app.get('/contactus',(req,res)=>{res.send("Contact us at contact@contact.com")})
app.get('/about',(req,res)=>{res.send("Welcome to the About page!")})

app.listen(port)
console.log(`server is running on http://localhost: ${port}`)



//---------BASIC CONCEPT OF EXPRESS-----------------------------------
/*
import express from "express";
const app=express();
const port=4000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
 
*/