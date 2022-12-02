let router = require('express').Router();
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schema = require('../schemas/reaction');
const isTheSameUser = require('../middlewares/isTheSameUser');
const Reaction = require('../models/Reaction');

let {create, updateReaction, read, deleteReaction} = require('../controllers/reaction');

router.route('/')
    .post(passport.authenticate("jwt", { session: false }),validator(schema), create)
    .put(passport.authenticate("jwt", { session: false }), updateReaction)
    .get(passport.authenticate("jwt", { session: false }),read)

router.route('/:id')
    .put(passport.authenticate("jwt", { session: false }), isTheSameUser(Reaction), deleteReaction)

module.exports = router;