const express = require('express')
require('./utils/db.config')

const app = express()
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    try{
        return res.render('index');
    }
    catch (e){
        return res.status(500).send('Internal Server Error')
    }
});

app.listen(3000, function () {
    console.log("Server running at port 3000");
})

module.exports = app
 