let router = require('express').Router()

let { create,update,read,destroy } = require ('../controllers/show')

router.post('/',create)
router.patch('/:id',update)
router.get('/',read)
router.delete('/:id',destroy)
module.exports = router;
