const express = require('express')
const router = express.Router()
const passport = require('passport')
const commentController = require('../controllers/comment')

const authentication = passport.authenticate("jwt",{session:false})

router.post('/',authentication,commentController.postComment)
router.put('/:id',authentication,commentController.modifyComment)
router.delete(':/id',authentication,commentController.deleteComment)

module.exports = router