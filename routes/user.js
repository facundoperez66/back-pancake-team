let router = require('express').Router()

let { create } = require ('../controllers/user')

router.route('/create').post(create)

module.exports = router;


module.exports = router;
