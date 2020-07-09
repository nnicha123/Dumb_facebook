require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const userRoutes = require('./routes/user')

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users',userRoutes)
db.sequelize.sync().then(() => {
    app.listen(Number(process.env.PORT),() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})