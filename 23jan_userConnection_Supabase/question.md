Q: 1
User Management Application using Node.js, Express, and Supabase
Design and develop a User Management Application using Node.js and Express.js as the backend framework and Supabase as the database layer.

Objective
The goal of this project is to build a RESTful backend service that performs complete CRUD (Create, Read, Update, Delete) operations on user data while enforcing proper data validation and error handling.

Functional Requirements
Supabase Integration

Connect a Node.js Express application with Supabase using the official Supabase client.
Store all user-related data in a Supabase PostgreSQL database.
User Schema Design

Create a users table in Supabase with appropriate fields such as:

id (UUID, primary key)
name (string, required)
email (string, required, unique)
password (string, required, hashed)
age (number, optional, must be ≥ 18)
role (string, default: "user")
created_at (timestamp, auto-generated)
CRUD APIs

Create User: Add a new user to the database.

Read Users:

Fetch all users.
Fetch a single user by ID.
Update User: Modify user details using user ID.

Delete User: Remove a user by ID.

Validations

Validate request payloads using middleware:

Name must not be empty.
Email must be a valid email format.
Password must have a minimum length (e.g., 8 characters).
Age (if provided) must be a number and ≥ 18.
Prevent duplicate email registrations.

Handle invalid or missing user IDs gracefully.

Error Handling

Return meaningful HTTP status codes and error messages.
Handle database errors, validation errors, and not-found cases properly.
Non-Functional Requirements
Use environment variables for Supabase URL and API keys.
Follow clean project structure (routes, controllers, services, validations).
APIs should return JSON responses only.
No frontend is required; testing can be done using Postman or Thunder Client.