
import fs from "fs"
import cloudinary from "../config/cloudinary.config.js";
export const signup=async(req,res)=>{
    try{
        const {name,email}=req.body;
        if(!req.file){
return res.status(400).json({
    message:'image is require'
});
        }
        const result= await cloudinary.uploader.upload(req.file.path,{
            folder:'masaiImages'
        });
        //  fs.unlinkSync(req.file.path); //remove from local
        res.status(201).json({
message:"Succesfullyy created",
user:{
    name,
    email,
    image:result.secure_url
}
        })
    }
    catch(error){
res.status(500).json({
    message:'signup failed'
})
    }
}