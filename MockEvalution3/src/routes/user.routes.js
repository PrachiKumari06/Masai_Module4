import express from "express"
import  {getUser,add}  from "../controller/user.controller.js"
const userRoute=express.Router()
userRoute.post("/",add)
userRoute.get("/:id",getUser)

export default userRoute