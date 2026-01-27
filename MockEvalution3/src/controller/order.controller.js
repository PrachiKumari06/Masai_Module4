import { supabase } from "../config/supabase.config.js";

export const addorder = async (req, res) => {
const {product_name,quantity,price,status,user_id}=req.body;
const {data,error}=await supabase.from("orders").insert([{
    product_name,quantity,price,status,user_id
}]).select()
if(error){
    return res.status(500).json({   
        status:false,
        error:error.message
    })
}
return res.status(201).json({
    status:true,
    message:"Order placed successfully",
    data
})
}
export const getOrders=async(req,res)=>{
    const {data,error}=await supabase.from("orders").select("*").eq("user_id",req.body.user_id);
    if(error){
        return res.status(500).json({
            status:false,
            error:error.message
        })
    }   
    return res.status(200).json({
        status:true,
        data
    })
}
export const updateOrder=async(req,res)=>{
    const {id}=req.params;
    const {product_name,quantity,price,status}=req.body;    
    const {data,error}=await supabase.from("orders").update({
        product_name,quantity,price,status
    }).eq("id",id).select();    
    if(error){
        return res.status(500).json({
            status:false,
            error:error.message
        })
    }
    return res.status(200).json({
        status:true,
        message:"Order updated successfully",
        data
    })
}
export const deleteOrder=async(req,res)=>{
    const {id}=req.params;
    const {data,error}=await supabase.from("orders").delete().eq("id",id).select(); 
    if(error){
        return res.status(500).json({
            status:false,
            error:error.message
        })
    }   
    return res.status(200).json({
        status:true,
        message:"Order deleted successfully",
        data
    })
}
