import express from 'express'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';
dotenv.config();

const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;

export const supabase=createClient(
    process.env.SUPABASE_URL,process.env.SUPABASE_SECRET_KEY
)
app.post("/",async(req,res)=>{
  const {name,email,password,age,role}=req.body;
  const {data:existing}=await supabase.from("customerdetail1").select().eq("email",email).maybeSingle();

  if(existing){
   return  res.status(409).json({message:`user already exist with email ${email}`})
  }
      const hashPass=await bcrypt.hash(password,10);

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

app.get("/:id",async(req,res)=>{
    const {id}=req.params;
    const {data,error}=await supabase.from("customerdetail1").select().eq("id",id).single();
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data fetched successfully",data})
})
app.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    const {data:error}=await supabase.from("customerdetail1").delete().eq("id",id);
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data deleted successfully"})
})
app.patch("/:id",async(req,res)=>{
    const {id}=req.params;
    const {name,email,password,age,role}=req.body;
    const hashPass=password?await bcrypt.hash(password,10):undefined;
    const {data,error}=await supabase.from("customerdetail1").update({
        name,
        email,
        password:hashPass,
        age,
        role
    }).eq("id",id).select();
    if(error){
        return res.status(500).json({message:error.message})
    }   
    res.status(200).json({message:"data updated successfully",data})
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})