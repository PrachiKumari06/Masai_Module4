//connection with db.json with hashing password

import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { readFileSync, writeFileSync } from 'fs'
import users from "./db.json" assert {type: 'json'}
import bcrypt from "bcrypt"

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


function readData(){
    const data=readFileSync("db.json","utf-8")
    return JSON.parse(data)
}
function writeData(data){
writeFileSync("db.json",JSON.stringify(data,null,2))
}
//insert data as signup
app.post('/signup', async(req, res) => {
    const {email,password}=req.body;
    const db=readData();
    const existUser=db.users.find(u=>u.email===email)
    if(existUser){
        return res.status(400).json({message:`user already exist with email ${email}`})
    }
    const hashPassword= await bcrypt.hash(password,10)  //salt (10 here but it can be any it just apply permutation here internally ,it can be 5)
    db.users.push({email,password:hashPassword})
    writeData(db);
    console.log("userdb now",db.users);
    res.json({message:"signup successfully"});
})

//insert data as login
app.post("/login",async(req,res)=>{
const {email,password}=req.body;
const db=readData();
const userLogin=db.users.find(u=>u.email===email);
if(!userLogin){
    return res.status(401).json({message:"Invalid Crediantial"})
}
//compare hashpaswword with input password
const isPassMatch=await bcrypt.compare(password,userLogin.password)
if(!isPassMatch){
    return res.status(401).json({message:"Invalid Crediantial: email or password"})
}
console.log(`user is login with email ${email}`);
res.json({message:"user login successfully"});
})

//to reset the db.json completely with empty
app.get("/reset",(req,res)=>{
    writeData({users:[]})
    console.log("DataBase is reset");
    res.json({message:"Data is reset Successfully"});
})

app.listen(port, () => console.log(`App listening on port ${port}!`))