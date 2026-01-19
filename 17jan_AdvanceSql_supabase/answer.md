# Database Relationships

## Definition of Database Relationship
A database relationship defines how tables are connected to each other using keys. Relationships help maintain data integrity, reduce redundancy, and allow efficient data retrieval across multiple tables.

---

## Types of Database Relationships

### 1. One-to-One Relationship
In a one-to-one relationship, one record in a table corresponds to exactly one record in another table.

**E-commerce Example:** User and User Profile  
One user has one profile, and one profile belongs to one user.

**Tables:**
- users(user_id, name, email)
- user_profiles(profile_id, user_id, address, phone)

---

### 2. One-to-Many Relationship
In a one-to-many relationship, one record in a table can be associated with multiple records in another table.

**E-commerce Example:** Customer and Orders  
A customer can place many orders, but each order belongs to only one customer.

**Tables:**
- customers(customer_id, name, email)
- orders(order_id, customer_id, order_date, total_amount)

---

### 3. Many-to-Many Relationship
In a many-to-many relationship, multiple records in one table are associated with multiple records in another table. This requires a junction table.

**E-commerce Example:** Orders and Products  
An order can contain many products, and a product can be part of many orders.

**Tables:**
- orders(order_id)
- products(product_id, product_name, price)
- order_items(order_id, product_id, quantity)

---

## Conclusion
Database relationships are essential for structuring an e-commerce database efficiently. They help represent real-world connections, ensure consistency, and support scalable application design.
