
import express from 'express'
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';   
import validation  from './middleware/validation.js';
import dotenv from 'dotenv'         //to get from .env
dotenv.config();

const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;

export const supabase=createClient(
    process.env.SUPABASE_URL,process.env.SUPABASE_SECRET_KEY
)
app.post("/signup",validation,async(req,res)=>{
  const {name,email,password,age,location}=req.body;
  const {data:existing}=await supabase.from("users").select().eq("email",email).single();

  if(existing){
   return  res.status(409).json({message:`user already exist with email ${email}`})
  }
      const hashPass=await bcrypt.hash(password,10);         //here 10 is known as salt to apply permutation and combination it can be 5 or 6
  const {data,error}=await supabase.from("users").insert([{
    name,
    email,
    password:hashPass,
    age,
    location
  }]).select();
 if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(201).json({message:"data inserted successfully",data})
})

app.get("/myprofile/",async(req,res)=>{
    const {name}=req.query;
    if(!name){
        return res.status(400).json({message:"name query param is required"})
    }
    const {data,error}=await supabase.from("users").select().eq("name",name);    
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data fetched successfully",data})
})
