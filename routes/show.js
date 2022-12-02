let router = require('express').Router();
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schema = require('../schemas/show');

let {create, read, update, destroyOne} = require('../controllers/show');

router.route('/')
    .get(read)
    .post(passport.authenticate("jwt", { session: false }), validator(schema), create)

router.route('/:id')
    .patch(passport.authenticate("jwt", { session: false }),update)
    .delete(passport.authenticate("jwt", { session: false }),destroyOne)

module.exports = router;