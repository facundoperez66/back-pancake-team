const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountEmailVerification');
const { userSignedUp, userNotFound } = require('../config/responses');


const controller = { 
    register: async (req, res, next) => {
    let { name, lastName, photo, age, email, password } = req.body;
    let role = 'user';
    let verified = false
    let logged = false
    let code = crypto.randomBytes(10).toString('hex');
    password = bcryptjs.hashSync(password, 10);
    try{
        await User.create({ name,lastName,role,photo,age,email,password,code,verified,logged })
        await accountVerificationEmail(email, code)
        return userSignedUp(req,res)
    }catch(error){
        console.log(error)
    }
},

verify: async (req, res, next) => {
    const { code } = req.params;

    try{
        let user = await User.findOneAndUpdate({code:code},{verified:true},{new:true})
        if(user){
            return res.redirect('http://localhost:3000/')
        }
        return userNotFound(req,res)

    }catch(error){
        next(error)
    }
}
}

module.exports = controller;