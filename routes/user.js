const router = require('express').Router();
const schema = require('../schemas/user');
const validator = require('../middlewares/validator');
const accountAllReadyExistsSignUp = require('../middlewares/accountAllReadyExistsSignUp')
const { register, verify, signIn } = require('../controllers/user');
const schemaSignIn = require('../schemas/signin')
const accountAllReadyExistsSignIn = require('../middlewares/accountAllReadyExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')





router.post('/sign-up',validator(schema),accountAllReadyExistsSignUp, register);
router.get('/verify/:code', verify);
router.post('/sign-in',validator(schemaSignIn),accountAllReadyExistsSignIn, accountHasBeenVerified, signIn)









module.exports = router;