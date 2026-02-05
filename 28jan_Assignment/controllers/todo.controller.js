import express from "express";
import supabase from "../config/supabase.config.js";
import authMiddleware from "../middleware/auth.middleware.js";

const todoRouter=express.Router();
todoRouter.use(authMiddleware)   //to protect all the routes of todoRouter from unauthorized access

todoRouter.post("/todos",async(req,res)=>{
    const {title,description,is_completed }=req.body;
    const {data,error}=await supabase.from("todo").insert([{
    title,
    description,
    is_completed,
    user_id:req.user.id
    }]).select();
    if(error){
        return res.status(400).json({message:error.message})
    }
res.status(201).json({message:"todo added successfully",data})
})

todoRouter.get("/todos",async(req,res)=>{
    const {data,error}=await supabase.from("todo").select().eq("user_id",req.user.id);

 if(error){
        return res.status(400).json({message:error.message})
    }
res.status(200).json({message:"todo fetched successfully",data})
})
todoRouter.delete("/todos/:todoId",async(req,res)=>{
    const {todoId}=req.params; //jo route me liya wo hi lenge agr route me user_Id lete to yaha bhi user_id hi lete
    const {data,error}=await supabase.from("todo").delete().eq("id",todoId)
    if(error){
        return res.status(400).json({message:error.message})
    }
res.status(200).json({message:"todo deleted successfully"})
})

todoRouter.put("/todos/:todoId",async(req,res)=>{
    const {todoId}=req.params;   //jo route me liya wo hi lenge agr route me user_Id lete to yaha bhi user_id hi lete
     const {title,description,is_completed}=req.body;
    const {data,error}=await supabase.from("todo").update(
    {title,description,is_completed}    
    ).eq("id",todoId).select();
    if(error){
        return res.status(400).json({message:error.message})
    }
res.status(200).json({message:"todo updated successfully",data})
})

export default todoRouter;

/*.eq("column_name", value)
The column name must be from your database table.
The value comes from req.params or req.body */