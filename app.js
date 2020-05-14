const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')
const users = require('./routes/user')
const auth = require('./routes/auth')
const express = require('express')
const app = express()

mongoose.connect('mongodb://localhost/test')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err))
 
app.use(express.json())
app.use('/api/users', users)
app.use('/api/auth',auth)
 
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`))