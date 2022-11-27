const User = require("../models/user");
const { invalidCredentials } = require("../config/responses");

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = user
        return next()
    }
    return invalidCredentials(req,res)
}

module.exports =  accountExistsSignIn 