import express from 'express';
import dotenv from 'dotenv';
import checkdb from './src/utils/dbHandlerCheck.js';
import userRoutes from './src/routes/user.routes.js';
import orderRoutes from './src/routes/order.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());          // needed for req.body
app.use('/users', userRoutes);    // cleaner route mounting
app.use('/orders', orderRoutes);
(async () => {   //immediate invoked function
  const isDB = await checkdb();

  if (!isDB) {
    console.log("Server not started because DB connection failed");
    process.exit(1);  
  }

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
