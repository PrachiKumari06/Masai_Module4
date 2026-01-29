 const validationInfo=(req,res,next)=>{
  const {name,email,password,age}=req.body;
  //name
  if(!name || name.trim()===''){
   return  res.status(400).json({message:"Name must not be empty"})
  }
  //password
  if(!password || password.length<8){
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }
//email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
next();
}
export default validationInfo