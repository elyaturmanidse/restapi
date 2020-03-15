let express = require('express')
let router = express.Router()

//part of the query string 
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`person requested ${req.query.name}`) //can be called like person?name=thomas^age=19
    }else{
        res.send('person requested')
    }
})

//Params property on teh request object == part of the route 
router.get('/person/:name', (req, res) => {
    res.send(`person requested ${req.params.name}`) //can do person/thomas
})

router.get('/error', (req, res) =>{
    throw new Error('error') //triggers exceprion that gets handeled in index.js
})

module.exports = router 