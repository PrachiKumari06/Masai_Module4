1. Why is db.json not suitable as a database for real projects?
db.json is just a normal file used to store data in JSON format. It may work for small demos or learning projects, but it is not good for real applications.
Limitations of file-based storage:
(i). Performance:
Every time data is added, updated, or read, the entire file may need to be accessed. As data grows, this becomes slow.
(ii)Scalability:
A JSON file cannot handle large amounts of data or many users at the same time. It is not designed for growth.
(iii)Concurrency:
If multiple users try to read or write data at the same time, it can cause data conflicts or file corruption.
(iv)Reliability:
If the file gets deleted, corrupted, or the system crashes while writing, data can be lost easily.
Because of these reasons, db.json is only good for testing or learning, not for production-level projects.

2. What are the ideal characteristics of a database system (apart from just storage)?
A good database system does much more than just store data.
(i). Performance:
It should quickly store and retrieve data even when the database is large.
(ii)Concurrency:
Many users should be able to access and modify data at the same time without issues.
(iii)Reliability:
Data should remain safe even if the system crashes or restarts.
(iv)Data Integrity:
The database should ensure data is accurate and consistent. Wrong or duplicate data should be avoided.
(v)Scalability:
The database should handle growing data and more users without slowing down.
(vi)Fault Tolerance:
If part of the system fails, the database should still work or recover automatically.

3. How many types of databases are there? What are their use cases or applications?
Databases are mainly divided into two types:

1. Relational Databases (SQL)
Data is stored in tables with rows and columns.
Relationships exist between tables.
Uses SQL (Structured Query Language).
Examples: MySQL, PostgreSQL, Oracle
Use cases:
Banking systems
College or school management systems
E-commerce websites (orders, users, payments)
These are best when data structure is fixed and data accuracy is very important.

2. Non-Relational Databases (NoSQL)
Data is stored in formats like documents, key-value pairs, or collections.
Structure is flexible.
Good for large and fast-changing data.
Examples: MongoDB, Firebase, Redis
Use cases:
Social media apps
Chat applications
Real-time applications
Big data and analytics
These are best when data changes often and needs to scale quickly.