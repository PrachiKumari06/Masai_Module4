Q: 1
Authorization-Based TODO Application using Node.js, Express & Supabase
Objective
Build a secure TODO application using Node.js, Express, Supabase, and JWT-based Authorization, following standard coding practices.

Your application must support user authentication, protected routes, and user-specific TODO management.

📌 Requirements
1. User Authentication
Implement the following:

✅ Signup Route
Endpoint: POST /signup
Accept: name, email, password
Hash the password using bcrypt
Store user data in Supabase
✅ Login Route
Endpoint: POST /login
Validate email & password (use bcrypt.compare)
On success, generate a JWT token
Token expiry: 1 hour
Example payload:

{
  "userId": "...",
  "email": "..."
}
2. Authorization Middleware
Create an authMiddleware:

Extract JWT from request headers:
Authorization: Bearer <token>
Verify token
Attach decoded userId to req.user
Block unauthorized access
All TODO routes must use this middleware.

3. TODO CRUD (Protected Routes)
Create a todos table in Supabase.

Each todo must contain:

id
title
completed
userId (foreign key from users)
created_at
🔐 Create Todo
POST /todos

Protected route
Automatically attach userId from JWT
Do NOT accept userId from request body
🔐 Get Todos
GET /todos

Return only todos belonging to the logged-in user
🔐 Update Todo
PUT /todos/:id

User can update ONLY their own todos
🔐 Delete Todo
DELETE /todos/:id

User can delete ONLY their own todos
4. Authorization Rules
Users must not access or modify other users’ todos
Validate ownership before update/delete
Return proper HTTP status codes
5. Project Structure (Suggested)
src/
 ├── config/
 │    └── supabase.js
 ├── middleware/
 │    └── auth.middleware.js
 ├── routes/
 │    ├── auth.routes.js
 │    └── todo.routes.js
 ├── controllers/
 ├── app.js
 └── server.js
6. Coding Standards
Use environment variables (dotenv)
Separate routes, controllers, middleware
Centralized error handling
Meaningful variable names
Proper status codes & responses
JWT secret in .env
Token validity: 1 hour