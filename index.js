const express = require('express')
const bodyParser = require('body-parser')
require('./utils/db.config')

const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use('/', authRoutes)


app.get('/', function (req, res) {
    try {
        return res.render('index');
    }
    catch (e) {
        return res.status(500).send('Internal Server Error')
    }
});


app.listen(3000, function () {
    console.log("Server running at port 3000");
})

module.exports = app
