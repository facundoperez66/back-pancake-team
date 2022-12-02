let router = require('express').Router();
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schema = require('../schemas/itinerary');


let {read, create, update, destroyOne } = require('../controllers/itinerary');

router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.put('/:id', passport.authenticate("jwt", { session: false }), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroyOne);

module.exports = router;