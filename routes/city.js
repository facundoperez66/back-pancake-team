const router = require('express').Router();
const validator = require("../middlewares/validator")
const schema = require("../schemas/newCity")


let { create, read, readOne, update, destroyOne } = require('../controllers/city');


router.route("/")
.post (validator(schema), create)
.get (read)
//  router.post('/', create);

router.route('/:id')
    .get(readOne)
    .put(update)
    .delete(destroyOne)


module.exports = router;