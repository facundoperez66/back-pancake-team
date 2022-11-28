const router = require('express').Router();
const validator = require("../middlewares/validator")
const schema = require("../schemas/newCity")
const passport = require("passport")


let { create, read, readOne, update, destroyOne, readAdminCities } = require('../controllers/city');


router.route("/")
.post (validator(schema), create)
.get (read)
//  router.post('/', create);

router.route('/:id')
    .get(readOne)
    .put(passport.authenticate("jwt", { session: false }),update)
    .delete(passport.authenticate("jwt", { session: false }),destroyOne)


module.exports = router;