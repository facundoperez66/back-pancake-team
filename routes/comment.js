let router = require('express').Router();
const schema = require('../schemas/comment');
const Comment = require('../models/Comment');
const validator = require('../middlewares/validator');
const passport = require('../config/passport');
const isTheSameUser = require('../middlewares/isTheSameUser');

const { read, create, update, deleteComment } = require('../controllers/comment');

router.route('/')
    .get(read)
    .post(passport.authenticate('jwt', { session: false }), validator(schema), create);

router.route('/:id')
    .put(passport.authenticate('jwt', { session: false }), isTheSameUser(Comment), validator(schema), update)
    .delete(passport.authenticate('jwt', { session: false }), isTheSameUser(Comment), deleteComment);

module.exports = router;