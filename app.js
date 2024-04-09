require('dotenv').config()
require('express-async-errors')

// express
const express = require('express')
const app = express()

// database
const connectDB = require('./db/connect')

// middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
