const { verify } = require("../config/responses");

function accountHasBeenVerified(req, res, next) {
    if (req.user.verified) {
        return next()
    }
    return verify(req,res)
}

module.exports =  accountHasBeenVerified 