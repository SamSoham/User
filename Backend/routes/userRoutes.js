const {register,login,sendmsg} = require('../controller/userControllers')

const router =  require('express').Router()

router.post('/register',register)
router.post('/login',login)
router.post('/sendmsg',sendmsg)



module.exports = router