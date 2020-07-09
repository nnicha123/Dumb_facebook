const express = require('express')
const router = express.Router()
const passport = require('passport')
const profileController = require('../controllers/profile.js')

const authentication = passport.authenticate("jwt",{session:false})

router.post('/',authentication,profileController.addProfile)

module.exports = router