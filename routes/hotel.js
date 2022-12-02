let router = require('express').Router()
const passport = require('../config/passport')
let { create, read, readOne, update, destroyOne } = require('../controllers/hotel')
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

router.route('/')
    .post(passport.authenticate("jwt", { session: false }),validator(schema), create)
    .get(read)

router.route('/:id')
    .get(readOne)
    .patch(passport.authenticate("jwt", { session: false }),update)
    .delete(passport.authenticate("jwt", { session: false }),destroyOne)

module.exports = router;