var express = require('express')
var app = express()
const port = process.env.PORT || 1234
const path = require('path')
console.log('path- ', path.join(__dirname))
// console.log(app)
//Installed Nodemon

//To get the response
app.get("/", (req, res) => {
    res.send("Hello from the Response");
})
//Routing to different page
app.get("/newpage", (req, res) => {
    res.send("Welcome to New Page");
})
//To listen the port
app.listen(port, () => {
    console.log(`Listening the port- ${port}`)
})