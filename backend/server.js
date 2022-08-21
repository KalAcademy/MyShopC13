import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()


app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, console.log(`server is runnning in ${process.env.NODE_ENV} mode on port ${port}`))