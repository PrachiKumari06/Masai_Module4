import express from 'express'
import fs from "fs"
import { todoRateLimiter } from '../middleware/rateLimiter.middleware';
import rateLimit from 'express-rate-limit';
import validateTodo from '../middleware/validateTodo.middleware';

const router = express.Router();

export const readData=()=>{
const data= fs.readFileSync("db.json","utf-8")
return JSON.parse(data)
}
export const writeData=(data)=>{
    fs.writeFileSync("db.json",JSON.stringify(data,null,2))
    }
router.get("/todo/:id", todoRateLimiter,(req, res) => {   //using of middleware too and it only for get 
  const data=readData()
  const a=data.todo.find(t=>t.id==req.params.id)
   if(!a)return res.send("todo not found")
    res.send(a) 
});
router.post("/add",validateTodo, (req, res) => {
  const data=readData()
  const newData={
        id:Date.now(),
        title:req.body.title,
        status:req.body.status
    }
  data.todo.push(newData)
  writeData(data)
  res.json({
messstatus:"todo added successfully"
  })
});
router.put("/update/:id",(req,res)=>{
    const data=readData()
    const a=data.todo.find(t=>t.id==req.params.id)
    if(!a)return res.send("No todo found with this id")
    a.title=req.body.title
    a.status=req.body.status
    writeData(data)
     res.json({
        messsage:"todo data updated successfully"
    })   
})
router.delete("/delete/:id",(req,res)=>{
   const data=readData()
    const a=data.todo.filter(t=>t.id!=req.params.id)
    writeData({todo:a})
     res.json({
        message:"todo data deleted successfully"
    })
})

export default router; 