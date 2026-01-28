1.What schema design is and what a database schema represents
Schema means structure plus rules that help in making database connections along with tables. Generally, public is the default schema where tables are stored, but we can also create our own schema when required.

2.Why schema design is required before writing backend code
Because when we write backend code, we need to connect it with the schema so that the tables we are going to use already exist. This helps the backend perform CRUD operations properly.

3.How poor schema design impacts data consistency, maintenance, and scalability
If schema design is poor, there is a high chance of data errors and inconsistency. We may not get proper data from tables.
For example:
(i) If we use email in schema, there should be validation for email format. If we allow random values, wrong data will be stored.
(ii) If employee ID is serial and an employee leaves the company, deleting the ID can create confusion. For large companies, UUID is better.

4.What validations are in schema design and why databases enforce validations
There are many types of validations:
(i) NOT NULL: Used for fields like name, age, and email which should not be empty.
(ii) UNIQUE: Used for email or ID so that values are not duplicated.
(iii) DEFAULT: Used to set a default value instead of providing it every time.
(iv) PRIMARY KEY: A unique identifier that cannot be null.
(v) FOREIGN KEY: Used to create a reference between tables, like using user_id in the order table to connect orders with users.

5.Difference between a database schema and a database table
Schema means structure and rules of the database. Tables are created inside the schema and are used to perform CRUD operations.

6.Why a table should represent only one entity
A table should represent only one entity to avoid confusion and make data management easier.

7.Why redundant or derived data should be avoided in table design
Derived data should be avoided because it is not always necessary. For example, when ordering items, storing the user’s age is not required. Avoiding such data also saves storage space.

8.Importance of choosing correct data types while designing tables
Choosing correct data types helps in maintaining data consistency, easier maintenance, and better scalability.