let express = require('express')
let router = express.Router()
router.get('/person', (req, res) => {
    res.send('person requested')
})

module.exports = router 