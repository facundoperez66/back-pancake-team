const mustSignInResponse = require('../config/responses')

function mustSignIn(req, res, next) {
    if(req.user) {
        return next();
    }

    return mustSignIn()
}

module.exports = mustSignIn