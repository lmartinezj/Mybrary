if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index') // tell the app know where is the router - relative path
const authorRouter = require('./routes/authors') // tell the app know where is the router - relative path

// connect to DATABASE
mongoose.set('useUnifiedTopology', true)
.set('useNewUrlParser', true)
.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.set('view engine', 'ejs') // set view engine to ejs
app.set('views', __dirname + '/views') // set the views folder
app.set('layout', 'layouts/layout') // Define the layout file as a template for the rest of the views

app.use(express.urlencoded({ extended: true })) // Has to be implented before app.use('/', indexRouter)
app.use(express.json())
app.use(expressLayouts) // tell the express application that we want to use layouts
app.use(express.static('public')) // Define the location of public files js css img
app.use('/', indexRouter) // tell the app to use the indexRouter when asked for / route
app.use('/authors', authorRouter) // every route inside author router is prepended with authors

app.listen(process.env.PORT || 3000) // Tells the app listen on port from env or defaults to 3000
