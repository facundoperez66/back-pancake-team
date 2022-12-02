const router = require('express').Router();
const schema = require('../schemas/newcity');
const validator = require('../middlewares/validator');
const passport = require('../config/passport')

let { create, read, readOne, update, destroyOne } = require('../controllers/city');

router.route('/')
    .post(passport.authenticate("jwt", { session: false }),validator(schema),create)
    .get(read)

router.route('/:id')
    .get(readOne)
    .put(passport.authenticate("jwt", { session: false }),update)
    .delete(passport.authenticate("jwt", { session: false }),destroyOne)

module.exports = router;