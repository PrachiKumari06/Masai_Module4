import express from 'express'
import cors from 'cors'
import authRoute from './src/routes/auth.routes.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const port =process.env.PORT ||3000

app.use('/user',authRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))