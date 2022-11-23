let router = require('express').Router()
const schema = require('../schemas/newHotel')
const validator= require('../middlewares/validator')
let { create, read, update, destroy, readOne } = require ('../controllers/hotel')


router.route('/')
.post(validator(schema),create)
.get(read)

router.route('/:id')
.get(readOne)
.patch(update)
.delete(destroy)
module.exports = router;
