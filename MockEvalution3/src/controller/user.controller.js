import { supabase } from "../config/supabase.config.js";

export const add=async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        const {data:existing}=await supabase.from("users").select().eq("email",email).single();
        if(existing){
            return res.status(409).json({
                status:false,
                error:`User with email ${email} already exists`});
        }
        //insert if not exist
        const {data,error}=await supabase.from("users").insert([{
        name,email,phone
        }]).select()
        //handle data insertion error
        if(error){
            return res.status(500).json({
                status:false,
                error:error.message
            })
        }
    //success
    return res.status(201).json({
                status:true,
                message:"User registered successfully",
                data
            })
    }
    catch(error){
       res.status(500).json({
         status:false,
                error: error.message
       })
    }
}
export const getUser=async(req,res)=>{
const {data:existing}=await supabase.from("users").select().eq(id===req.body.id);
if(existing){
    res.status(201).json({message:"user exist",data:existing})
}else{
    res.status(404).json({message:"user not found"})
}
}
