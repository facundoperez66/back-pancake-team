let router = require('express').Router();

let {create, read, update, destroyOne} = require('../controllers/show');

router.post('/', create);
router.get('/', read);
router.patch('/:id', update);
router.delete('/:id', destroyOne);

module.exports = router;