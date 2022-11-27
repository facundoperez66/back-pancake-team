const router = require('express').Router();
const schema = require('../schemas/user');
const validator = require('../middlewares/validator');
const accountAllReadyExistsSignUp = require('../middlewares/accountAllReadyExistsSignUp')
const { register, verify, logout } = require('../controllers/user');






router.post('/sign-up',validator(schema),accountAllReadyExistsSignUp, register);
router.get('/verify/:code', verify);










module.exports = router;