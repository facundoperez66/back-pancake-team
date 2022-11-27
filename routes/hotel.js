let router = require('express').Router()

let { create, read, readOne, update, destroyOne } = require('../controllers/hotel')
const schema = require('../schemas/newHotel')
const validator = require('../middlewares/validator')

router.route('/')
    .post(validator(schema), create)
    .get(read)

router.route('/:id')
    .get(readOne)
    .patch(update)
    .delete(destroyOne)

module.exports = router;