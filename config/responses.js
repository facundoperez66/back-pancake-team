function userAllReadyExists(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUp(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}

function userSignedOut(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFound(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignIn(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentials(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}

function verify(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

module.exports = {
    userSignedUp,
    userAllReadyExists,
    userNotFound,
    userSignedOut,
    mustSignIn,
    invalidCredentials,
    verify
}