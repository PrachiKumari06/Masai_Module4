import express from "express"
import { readData,writeData } from "./model/todo.model.js"
import { addTodo, deleteTodo, getTodo, getTodoId, updateTodo } from "./controller/todo.controller.js"
import dotenv from "dotenv"   //to use env file
dotenv.config() //configuring dotenv to use env file
const app=express()
const port=process.env.PORT || 3000
app.use(express.json())
app.get("/todo",getTodo)
app.get("/todo/:id",getTodoId)

app.post("/todo",addTodo)
app.put("/todo/:id",updateTodo)
app.delete("/todo/:id",deleteTodo)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})