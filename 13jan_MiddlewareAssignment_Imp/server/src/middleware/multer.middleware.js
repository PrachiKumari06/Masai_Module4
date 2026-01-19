import multer from 'multer'
 export const storage=multer.diskStorage({    //we can use memory in place of diskStorage also 
    filename:(req,file,cb)=>{
        cb(null,Date.now() + "-" + file.originalname)
    }
})
export const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }
    else{
        cb(new Error("Only image are allowed"))  //cb :callback
    }
}
export const upload=multer({
    storage,
    fileFilter
})