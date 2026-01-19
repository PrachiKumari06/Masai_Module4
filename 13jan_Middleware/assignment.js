import express from 'express'
import usersRoutes from "./routes_assignment/users.routes.js"
import todosRoutes from './routes_assignment/todos.routes.js'
import loggerMiddleware from './middleware/logger.middleware.js'

const app = express()
const port = 3000

app.use(express.json());
app.use(loggerMiddleware); // app-level middleware


app.use("/users", usersRoutes);
app.use("/todos", todosRoutes);
app.listen(port, () => console.log(`Example appp listening on port ${port}!`))

//Logger → app.use
// Rate-limit -> only GET /todos
//  Validation -> only POST /todos/add