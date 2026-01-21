import express from 'express'
import fs from 'fs';

const router = express.Router();
function readData(){
const data= fs.readFileSync("db.json","utf-8")
    return JSON.parse(data)
}
function writeData(data){
    fs.writeFileSync("db.json",JSON.stringify(data,null,2))
    }
router.get("/",(req,res)=>{
    const data=readData()
    res.status(200).json({  
        data:data.products,
        message:"products data fetched successfully"
       })
})
router.get("/:id",(req,res)=>{
    const data=readData()
    const p=data.products.filter(a=>a.id==req.params.id)
    if(p.length==0) return res.send("product not found");
    res.status(200).json({  
        data:p,
        message:"products data fetched successfully"
       })
})
router.post("/add",(req,res)=>{
    const data=readData()
    const newData={
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    }
    data.products.push(newData)
    writeData(data)
    res.status(201).json({
        message:"products data added successfully"
    })
})
router.patch("/:id",(req,res)=>{
    const data=readData()
    const a=data.products.find(t=>t.id==req.params.id)
    if(!a)return res.status(404).send("product not found")  //we can use res.send 
    a.name=req.body.name
    a.price=req.body.price
    a.stock=req.body.stock    
    writeData(data)
    res.status(200).json({
        message:"products data updated successfully"
    })
})
router.delete("/:id",(req,res)=>{
    const data=readData()
    const a=data.products.filter(t=>t.id!=req.params.id)
  if (a.length === data.products.length) { //optional to not found
        return res.send("product not found");
    }   
     writeData({products:a})
    res.status(200).json({
        message:"products data deleted successfully"
    })
})
export default router;