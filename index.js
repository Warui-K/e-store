const express = require('express')
const app = express()


app.get('/', function (req, res) {
    try{
        return res.send('Hello World main!');
    }
    catch (e){
        return res.status(500).send('Internal Server Error')
    }
})
app.listen(3000, function () {
    console.log("Server running at port 3000");
})

module.exports = app
 