const User = require("../models/User");
const { userExists } = require("../config/responses");

async function accountAllReadyExistsSignUp(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return userExists(req,res)
    }
    return next()
}

module.exports = accountAllReadyExistsSignUp