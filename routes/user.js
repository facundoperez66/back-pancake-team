const router = require('express').Router();
const schema = require('../schemas/user');
const validator = require('../middlewares/validator');
const accountAllReadyExistsSignUp = require('../middlewares/accountAllReadyExistsSignUp')
const schemaSignIn = require('../schemas/signin')
const accountAllReadyExistsSignIn = require('../middlewares/accountAllReadyExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const passport = require('../config/passport')
const { register, verify, signIn, signInToken } = require('../controllers/user');
const mustSignIn = require('../middlewares/mustSignIn');



router.post('/sign-up',validator(schema),accountAllReadyExistsSignUp, register);
router.get('/verify/:code', verify);
router.post('/sign-in',validator(schemaSignIn),accountAllReadyExistsSignIn, accountHasBeenVerified, signIn)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, signInToken)








module.exports = router;