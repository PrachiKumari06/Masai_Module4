export const validation=async(req,res,next)=>{
    const {name,email,password,age,location}=req.body;
    if(!name || !email || !password || !age || !location){
        return res.status(400).json({message:"All fields are required"})
    }
    if(!email.includes("@")){
        return res.status(400).json({message:"Invalid email format"})
    }
    if(age<18 || age>100){
        return res.status(400).json({message:"Age must be between 18 and 100"})
    }
        next();

}
