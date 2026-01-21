import express from 'express'
import ProductInfo from './routes/products.routes.js'
import OrderInfo from './routes/order.routes.js'
import AnalyticsInfo from './routes/analytic.routes.js'
const app = express()
const port = 3000

app.use(express.json())

app.use('/product',ProductInfo)
app.use('/order',OrderInfo)
app.use('/analytics',AnalyticsInfo)
app.listen(port, () => console.log(` app listening on port ${port}!`))