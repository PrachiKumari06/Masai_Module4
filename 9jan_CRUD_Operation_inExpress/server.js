import express from 'express'
import data from './db.json' assert {type: 'json'}

const app=express()
const port=3000;
app.use(express.json())
app.get('/students',(req,res)=>{
    res.json({
        data:data,
        message:"data fetched successfully"
    })
})
app.post('/students',(req,res)=>{
    const {id,name,course,year}=req.body;
    data.push({id,name,course,year})
    res.json({
        data:data,
        message:"data added successfully"
    })
})
app.put('/students/:id',(req,res)=>{
    const {id}=req.params;
    const {name,course,year}=req.body;
    const student=data.find((stud)=>stud.id===Number(id));
    student.name=name;
    student.course=course;
    student.year=year;
    res.json({
        data:data,
        message:"data updated successfully"
    })
})
app.delete('/students/:id',(req,res)=>{
    const {id}=req.params;
    data.students=data.filter((stud)=>stud.id!==Number(id));
    res.json({
        data:data,
        message:"data deleted successfully"
    })
})           
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

/*
----------------PRACTICE SESSION------------------------------------
import express from 'express'
const app=express()
const port =3000

app.post('/user/',(req,res)=>{
    res.json({"message":"User created successfully"})
})
app.post('/todo/',(req,res)=>{
    todo.push({"message":"Todo created successfully"})
})

app.get('/',(req,res)=>res.send("Hi this is home pagee "))
app.listen(port,()=>{
    console.log(`server is running on : ${port}`)
})

*/ 