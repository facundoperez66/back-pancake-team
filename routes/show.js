let router = require('express').Router()

let { create,update,read } = require ('../controllers/show')

router.post('/',create)
router.patch('/:id',update)
router.get('/',read)
module.exports = router;
