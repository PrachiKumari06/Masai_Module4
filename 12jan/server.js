import express from 'express';
import {readFileSync, writeFileSync} from "fs"
import user from "./db.json" assert {type: 'json'}
const app=express()
const port =4000
app.use(express.json());

function readData(){
    const data=readFileSync("db.json","utf-8")
    return JSON.parse(data)
}
function writeData(data){
writeFileSync("db.json",JSON.stringify(data,null,2))
}
app.post("/user",(req,res)=>{
    const data=readData();
    data.user.push(req.body);
    writeData(data);
 res.send("data add successfully");
})
/*
app.get("/user",(req,res)=>{
    const data=readData()
res.json({
        data:data,
        message:"data showed successfully"
    })   
})
*/
app.get("/user/:id",(req,res)=>{   //getting data(fetch)
    const data=readData()
const a=data.user.find(u=>u.id==req.params.id) 
if(!a)return res.send("user not found");
res.send(a) 
})

app.put("/user/:id",(req,res)=>{   //updation
    const data=readData()
const a=data.user.find(u=>u.id==req.params.id) 
if(!a)return res.send("user not found");
a.name=req.body.name;
writeData(data)
res.send("user updated") 
})

/*  using find method 
app.delete("/user/:id",(req,res)=>{
const data=readData()
const a=data.user.find(u=>u.id==req.params.id) 
if(!a)return res.send("user not found");
data.user.splice(a,1);
writeData(data)
res.send("user deleted successfully") 

})
*/
// usingg filter method
app.delete("/user/:id",(req,res)=>{
const data=readData()
const a=data.user.filter(u=>u.id!=req.params.id) 
data.user=a;        //to use the udated data after removing that id 
writeData(data)
res.send("user deleted successfully") 

})
// ----------------------------CONCEPT OF QUARY PARAMETER-----------------------------------------------------------------------------------------------------------------------
const employee=[
    {id:1,name:"abc",age:23,active:true},
    {id:2,name:"b",age:24,active:false},
    {id:3,name:"c",age:25,active:true}

]
app.get("/employ",(req,res)=>{   //http://localhost:4000/employ?age=23
    let r=[...employee]; //spread oprator : to make shallow copy
//filtering:
if(req.query.age){
const ageNumber = Number(req.query.age);
    r=r.filter(c=>c.age==ageNumber)
}
if(req.query.name){   //http://localhost:4000/employ?name=b
const Name = req.query.name;
    r=r.filter(c=>c.name==Name)
}
     res.json(r);
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})