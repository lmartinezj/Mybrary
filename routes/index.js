const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
    let books
    try {
        books = await Book.find()
        .sort({ createdAt: 'desc' })
        .limit(10)
        .exec()
    } catch (error) {
        console.error('Error: ' + error.message)
        books = []
    }
    res.render('index', {books: books})
})

module.exports = router // export the file available to the app as router.
