Q: 1
Objective
Design and implement a backend Customer–Order Management System using Node.js and Express.js, with Supabase (PostgreSQL) as the database.

The system must demonstrate:

Proper relational database design
Usage of foreign keys
Cascade delete behavior
Complete CRUD operations
Clear error handling and validations
Functional Requirements
1️⃣ Relational Database Design
Create two related tables in Supabase.

Customers Table
Stores customer account details.

Fields (suggested):

id (UUID, Primary Key)
full_name (TEXT, NOT NULL)
email (TEXT, NOT NULL, UNIQUE)
phone (TEXT, NOT NULL)
created_at (TIMESTAMP)
Orders Table
Stores orders placed by customers.

Fields (suggested):

id (UUID, Primary Key)
product_name (TEXT, NOT NULL)
quantity (INTEGER, NOT NULL)
price (NUMERIC, NOT NULL)
order_status (TEXT, default: pending)
customer_id (UUID, Foreign Key → customers.id)
created_at (TIMESTAMP)
🔑 Relationship Rules
Each Order belongs to exactly one Customer
A Customer can place multiple Orders
If a Customer is deleted, all their Orders must be deleted automatically
Cascade delete must be handled at the database level
2️⃣ Customer Registration
Implement Customer Registration API

Validate:

full_name
email
phone
Prevent duplicate email registrations

Store customer details in the customers table

3️⃣ Order CRUD Operations (Customer-Linked)
All Order APIs must be linked to a Customer using customerId.

➕ Create Order
Endpoint: POST /add-order

Request body:

product_name
quantity
price
customerId
Store the order with customer_id referencing the customer

📥 Get Customer Orders
Endpoint: GET /get-my-orders/:customerId
Fetch only orders belonging to the given customer
If customer does not exist, return an appropriate error
✏️ Update Order
Endpoint: PUT /update-order/:orderId

Allow updating:

quantity
price
order_status
Ensure the order exists before updating

❌ Delete Order
Endpoint: DELETE /delete-order/:orderId
Delete a single order using its ID
4️⃣ Cascade Delete Requirement (MANDATORY)
When a Customer is deleted, all related Orders must be deleted automatically

This must be enforced using:

Foreign key constraint
ON DELETE CASCADE
Manual deletion of orders in application code is not allowed

5️⃣ Validations & Error Handling
Handle the following cases properly:

Invalid customer ID
Invalid order ID
Missing required fields
Foreign key constraint violations
Duplicate email registration
Use proper HTTP status codes and clear error messages.

6️⃣ Non-Functional Requirements
Use environment variables for Supabase configuration

Follow clean folder structure:

routes
controllers
validations
No frontend required

APIs must return JSON only

Test APIs using Postman / Thunder Client

