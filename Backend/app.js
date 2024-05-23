const express = require('express')
const mongoose = require('mongoose')
const taskRoute = require('./routes/taskRoute')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()

app.get('/', (req, res)=> {
   res.send('Hello World')
})
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(()=> {
  app.listen(process.env.PORT, ()=> {
    console.log(`DB Connected! & Running in ${process.env.PORT}`);
  })
}).catch((err)=> {
  console.log({
    Message : err.message
  })
})

app.use('/api/tasks', taskRoute)
