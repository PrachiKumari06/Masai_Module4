//Authorization(jwt) +Authentication(bcrypt : password hashing ) connection with supabase with hashing password

import express from 'express'
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';   //authentication
import jwt from "jsonwebtoken"  //authorization used to generate a tokenm for login

import dotenv from 'dotenv'         //to get from .env
dotenv.config();

const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;

export const supabase=createClient(
    process.env.SUPABASE_URL,process.env.SUPABASE_SECRET_KEY
)
//-----------------------------------------Authentication(bcrypt)--------------------------------------------------------------------------------------------------
app.post("/signup",async(req,res)=>{
  const {name,email,password,age,role}=req.body;
  const {data:existing}=await supabase.from("customerdetail1").select().eq("email",email).maybeSingle();

  if(existing){
   return  res.json({message:`user already exist with email ${email}`})
  }
      const hashPass=await bcrypt.hash(password,10);         //here 10 is known as salt to apply permutation and combination it can be 5 or 6
  const {data,error}=await supabase.from("customerdetail1").insert([{
    name,
    email,
    password:hashPass,
    age,
    role
  }]).select();
 if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data fetched successfully",data})
})

app.get("/",async(req,res)=>{
    const {data,error}=await supabase.from("customerdetail1").select();    
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data fetched successfully",data})
})
//-----------------------------------------Authurization->npm i jsonwebtoken-> (jwt for token generation while login)--------------------------------------------------------------------------------------------------
const JWT_KEY=process.env.JWT_SECRETKEY

app.post("/login",async(req,res)=>{
    const {name,email,password}=req.body;
    const {data,error}=await supabase.from("customerdetail1").select().eq("email",email).single();
    if(!data){
            return res.status(401).json({message:"Invalid Crediantial"})
    }
    const isMatchPass=await bcrypt.compare(password,data.password);                      //bcrypt.compare(plainPassword(jo hum req me dalenge), hashedPasswordFromDB)
    if(!isMatchPass){
        return res.status(401).json({message:"Invalid Crediantial: email or password"})
    }
    const token=jwt.sign(                    //to check : go to jwt.io website : and postman give token paste here it will give all the detail of user id,name,email
         { id: data.id, email: data.email,name:data.name },
    JWT_KEY,
    { expiresIn: "1h" }
    );
    res.status(200).json({message:"user login successfully",token})
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})