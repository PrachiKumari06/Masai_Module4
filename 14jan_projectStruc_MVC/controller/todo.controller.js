import { readData,writeData } from "../model/todo.model.js"
export const getTodo=(req,res)=>{
   const data=readData()
   res.status(200).json({
    data:data.todo,
    message:"todo data fetched successfully"
   })
}
export const getTodoId=(req,res)=>{
    const data=readData()
    const a=data.todo.find(t=>t.id==req.params.id)
    if(!a) return res.status(404).send("todo not found")
   // res.send(a)
  res.status(200).send(a)

}
export const addTodo=(req,res)=>{
    const data=readData()
    const newData={
        id:Date.now(),
        title:req.body.title,
        status:req.body.status
    }
    data.todo.push(newData)
    writeData(data)
    // res.json({
    res.status(201).json({
        message:"todo data added successfully"
    })
}

export const updateTodo=(req,res)=>{
    const data=readData()
    const a=data.todo.find(t=>t.id==req.params.id)
    if(!a)return res.status(404).send("todo not found")  //we can use res.send 
    a.title=req.body.title
    a.status=req.body.status    
    writeData(data)
    //res.json({
    res.status(200).json({
        message:"todo data updated successfully"
    })
}

export const deleteTodo=(req,res)=>{
    const data=readData()
    const a=data.todo.filter(t=>t.id!=req.params.id)
    writeData({todo:a})
    // res.json({
    res.status(200).json({
        message:"todo data deleted successfully"
    })
}

/*
200 for successful GET, UPDATE, DELETE
201 for successful CREATE
404 when todo is not found
*/