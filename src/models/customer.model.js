let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = ''

//connect to the database
mongoose.connect(`mongods://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

//export the model
module.exports = mongoose.model('Customer', CustomerSchema)