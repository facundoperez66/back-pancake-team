const mustSignIn = require('../config/responses')

function mustSignIn1(req, res, next) {
    if(req.user){
        return next()

    }
    return mustSignIn()
}

module.exports = mustSignIn1