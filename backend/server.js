import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
dotenv.config()
connectDB()


app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

const port = process.env.PORT || 5000
app.listen(port, console.log(`server is runnning in ${process.env.NODE_ENV} mode on port ${port}`))