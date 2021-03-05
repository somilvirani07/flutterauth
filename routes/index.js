const express = require('express')
const { adduser } = require('../methods/actions')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req,res) => {
    res.send('Dashboard')
})

//Adding new user
//@routes POST /adduser 
router.post('/adduser', actions.adduser)

//Authenticating user
//@routes POST /authenticate 
router.post('/authenticate', actions.authenticate)

//Getting user info
//@routes GEt /getinfo 
router.get('/getinfo',actions.getinfo)

module.exports = router

