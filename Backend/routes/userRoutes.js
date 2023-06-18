const {register,login,sendmsg,getuser,changepwd} = require('../controller/userControllers')

const router =  require('express').Router()

router.post('/register',register)
router.post('/login',login)
router.post('/sendmsg',sendmsg)
router.get('/getuser',getuser)
router.post('/changepwd',changepwd)



module.exports = router