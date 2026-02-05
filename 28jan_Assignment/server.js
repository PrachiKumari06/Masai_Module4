import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

import userRouter from './controllers/user.controller.js';
import todoRouter from './controllers/todo.controller.js';

const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;

app.use("/user",userRouter);
app.use("/todo",todoRouter);


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})