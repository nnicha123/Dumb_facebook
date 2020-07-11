require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/profile')
const commentRoutes = require('./routes/comment')
const friendRoutes = require('./routes/friend')
const ownRoutes = require('./routes/own')

// Middlewares
require('./config/passport/passport')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users',userRoutes)
app.use('/profiles',profileRoutes)
app.use('/comments',commentRoutes)
app.use('/friends',friendRoutes)
app.use('/owns',ownRoutes)

db.sequelize.sync().then(() => {
    app.listen(Number(process.env.PORT),() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})