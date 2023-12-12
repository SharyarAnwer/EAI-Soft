const router = require('express').Router()

const {post} = require('../controller/post')

router.get("/" , post)

module.exports = router