import express from 'express'
import { signup } from '../controller/auth.controller.js'
import { upload } from '../middleware/multer.middleware.js'
const route = express.Router()

route.post('/signup',upload.single("image"), signup)
export default route
