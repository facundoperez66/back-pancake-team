let router = require('express').Router();

let { create, read, readOne } = require('../controllers/city');

router.post('/', create);
router.get('/', read)
router.get('/:id', readOne); 




module.exports = router;