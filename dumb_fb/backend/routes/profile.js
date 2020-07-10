const express = require('express')
const router = express.Router()
const passport = require('passport')
const profileController = require('../controllers/profile.js')

const authentication = passport.authenticate("jwt",{session:false})

router.get('/:username',authentication,profileController.getProfile)
router.post('/',authentication,profileController.addProfile)
router.put('/:id',authentication,profileController.modifyProfile)
router.delete('/:id',authentication,profileController.deleteProfile)

module.exports = router