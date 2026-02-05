import express from "express";
const userRouter=express.Router();
import supabase from "../config/supabase.config.js";
import validationInfo from "../middleware/validation.js"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
const JWT_KEY=process.env.JWT_SECRET_KEY;


userRouter.post("/signup",validationInfo,async(req,res)=>{
  const {name,email,password}=req.body;
  const {data:existing}=await supabase.from("userinfo").select().eq("email",email).single();

  if(existing){
   return  res.status(409).json({message:`user already exist with email ${email}`})
  }
      const hashPass=await bcrypt.hash(password,10);

  const {data,error}=await supabase.from("userinfo").insert([{
    name,
    email,
    password:hashPass
  }]).select();
 if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(201).json({message:"user created successfully",data})
})

userRouter.get("/",async(req,res)=>{
    const {data,error}=await supabase.from("userinfo").select();    
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data fetched successfully",data})
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const {data,error}=await supabase.from("userinfo").select().eq("email",email).single();
    if(error){
        return res.status(500).json({message:error.message})
    }
    const isMatch=await bcrypt.compare(password,data.password);
    
    if(!isMatch){
        return res.status(401).json({message:"invalid credentials"})
    }
    const token=jwt.sign(
        { id: data.id, email: data.email,name:data.name },
    JWT_KEY,
    { expiresIn: "1h" }
    );
    res.status(200).json({message:"login successful",token})
})
userRouter.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    const {data:error}=await supabase.from("userinfo").delete().eq("id",id);
    if(error){
        return res.status(500).json({message:error.message})
    }
    res.status(200).json({message:"data deleted successfully"})
})
userRouter.patch("/:id",validationInfo,async(req,res)=>{
    const {id}=req.params;
    const {name,email,password}=req.body;
    const hashPass=password?await bcrypt.hash(password,10):undefined;
    const {data,error}=await supabase.from("userinfo").update({
        name,
        email,
        password:hashPass
    }).eq("id",id).select();
    if(error){
        return res.status(500).json({message:error.message})
    }   
    res.status(200).json({message:"data updated successfully",data})
})

export default userRouter;