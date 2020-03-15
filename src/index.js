let express = require("express")
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

//Middleware function aka pipeline 
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.Body)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

//404 handler 
app.use((req, res, next) => {
    res.status(404).send('broken')
})

//500 handler 
app.use((err, req, res, next) =>{
    console.log(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
