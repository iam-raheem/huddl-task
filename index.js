require('dotenv').config()

// process.env.var

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(port, () => console.log(`Clothing store app listening on port ${port}!`))