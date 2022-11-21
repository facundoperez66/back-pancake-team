let router = require('express').Router()

let { create, read, update, destroy, readOne } = require ('../controllers/hotel')

router.post('/',create)
router.get('/',read)
router.patch('/:id',update)
router.delete('/:id', destroy)
router.get('/:id',readOne)
module.exports = router;
