const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// public folder setup 
app.use(express.static('./public'))

// we dont need using body parser in exress 4 
app.use(express.urlencoded({ extended: true }))

// users variable 
let users = [{
    id: "0",
    username: "test",
    password: 'pass '
}]

// routes 
app.get('/users', (req, res) => {
    res.render('index', { users })
})

app.get('/users/delete/:id', (req, res) => {
    users = users.filter(user => user.id != req.params.id)
    res.redirect('/users')
})


// start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))