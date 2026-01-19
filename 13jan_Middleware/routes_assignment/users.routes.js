import express from 'express'
import fs from "fs"

const router = express.Router();

export const readData=()=>{
const data= fs.readFileSync("db.json","utf-8")
return JSON.parse(data)
}
export const writeData=(data)=>{
    fs.writeFileSync("db.json",JSON.stringify(data,null,2))
    }
router.get("/user/:id", (req, res) => {
  const data=readData()
  const a=data.user.find(t=>t.id==req.params.id)
   if(!a)return res.send("user not found")
    res.send(a) 
});
router.post("/add", (req, res) => {
  const data=readData()
  const newData={
        id:Date.now(),
        name:req.body.name,
        age:req.body.age
    }
  data.user.push(newData)
  writeData(data)
  res.json({
message:"user added successfully"
  })
});
router.put("/update/:id",(req,res)=>{
    const data=readData()
    const a=data.user.find(t=>t.id==req.params.id)
    if(!a)return res.send("No user found with this id")
    a.name=req.body.name
    a.age=req.body.age
    writeData(data)
     res.json({
        message:"todo data updated successfully"
    })   
})
router.delete("/delete/:id",(req,res)=>{
   const data=readData()
    const a=data.user.filter(t=>t.id!=req.params.id)
    writeData({user:a})
     res.json({
        message:"todo data deleted successfully"
    })
})

export default router; 