const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/User')
require('./utils/db.config')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    try {
        return res.render('index');
    }
    catch (e) {
        return res.status(500).send('Internal Server Error')
    }
});

app.get('/register', function (req, res) {
    try {
        return res.render('register');
    }
    catch (e) {
        return res.status(500).send('Internal Server Error')
    }
});

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save()
    return res.render('register', { message: 'Registration successful' })
})

app.listen(3000, function () {
    console.log("Server running at port 3000");
})

module.exports = app
