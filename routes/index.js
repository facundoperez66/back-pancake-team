let router = require('express').Router()

let user = require ('./user')
let hotel = require ('./hotel')
let show = require ('./show')


router.use('/user', user)
router.use('/hotel',hotel)
router.use('/show', show)



module.exports = router;
