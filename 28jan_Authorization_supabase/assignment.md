Mini User Authentication System
Tech Stack: Node.js • Express.js • Supabase (PostgreSQL)

📌 Objective
Create a simple User Authentication API using Node.js, Express, and Supabase.

The application must allow users to:

Sign up
Store their details securely
Fetch their profile (without exposing password)
🗄️ Part 1 — Database Design (Supabase)
Create a table named users with the following columns:

Column Name	Data Type	Constraints
id	UUID	Primary Key, auto generated
name	TEXT	NOT NULL
email	TEXT	UNIQUE, NOT NULL
age	INTEGER	NOT NULL
location	TEXT	NOT NULL
password	TEXT	NOT NULL
created_at	TIMESTAMP	Default NOW()
🚀 Part 2 — Signup API
Endpoint
POST /signup
Request Body Example
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "age": 22,
  "location": "Bangalore",
  "password": "123456"
}
Requirements
While implementing /signup:

Validate that all fields are provided
Hash the password using bcrypt
Store the user in Supabase
Email must be unique
Return success response after registration
Expected Response
{
  "message": "User registered successfully"
}
👤 Part 3 — User Profile API
Endpoint
GET /myprofile?name=<name>
Example:

/myprofile?name=Ravi
Requirements
Fetch user using the name query parameter
Return user details
Do NOT send password
If user not found, return proper error
Expected Response
{
  "id": "uuid",
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "age": 22,
  "location": "Bangalore"
}
⚠️ Mandatory Rules
Use Supabase JS Client
Use bcrypt for password hashing
Use async/await
Proper error handling using try/catch
Password must NEVER be returned in any API
⭐ Bonus (Optional)
Prevent duplicate email signup
Return 404 if user does not exist
Add basic input validation