const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountEmailVerification');
const { userSignedUp, userNotFound, invalidCredentials, userSignedOut } = require('../config/responses');
const jwt = require('jsonwebtoken')

const controller = {
    register: async (req, res, next) => {
        let { name, lastName, photo, age, email, password } = req.body;
        let role = 'user';
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex');
        password = bcryptjs.hashSync(password, 10);
        try {
            await User.create({ name, lastName, role, photo, age, email, password, code, verified, logged })
            await accountVerificationEmail(email, code)
            return userSignedUp(req, res)
        } catch (error) {
            console.log(error)
        }
    },

    verify: async (req, res, next) => {
        const { code } = req.params;

        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                return res.redirect('http://localhost:3000/')
            }
            return userNotFound(req, res)

        } catch (error) {
            next(error)
        }
    },

    logout: async (req, res, next) => {
        let { user } = req;
        try{
            let userLogout = await User.findOneAndUpdate({ mail: user.email }, { online: false }, { new: true })
            return userSignedOut(req, res)
        }catch(error){
            next(error)
        }
    },

    signIn: async (req, res, next) => {
        let { password } = req.body;
        let { user } = req;
        try {
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                await User.findOneAndUpdate({ mail: user.email }, { online: true }, { new: true })
                let token = jwt.sign(
                    { id: user.id },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }
                )
                user = {
                    name: user.name,
                    email: user.email,
                    photo: user.photo,
                    role: user.role,
                    id: user.id,
                }
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: 'Hi ' + user.name 
                })
            }
            return invalidCredentials(req, res)
        } catch (error) {
            next(error)
        }
    },

    signInToken: async (req, res, next) => {
        let { user } = req;
        try {
            return res.json({
                response: {
                    user
                },
                success: true,
                messagge: `Welcome ${user.name}`
            })
        } catch (error) {
            next(error)
        }
    },

    readOne: async (req, res , next) => {
        let id = req.params.id
        try{
            let user = await User.findById({_id: id})
            if(user) {
                res.status(200).json({
                    success: true,
                    message: 'The user was founded',
                    data: user,
                })
            }else {
                res.status(404).json({
                    success: false,
                    message: 'The user was not found'
                })
            }
        }catch(error){
            next(error)
        }
    },

    update: async(req, res, next) => {
        let id = req.params.id
        if(req.body.password){
            let{password} = req.body
            password = bcryptjs.hashSync(password,10)
            req.body.password = password
        }
        try{
            let user = await User.findOneAndUpdate({_id: id}, req.body, {new: true})
            if (user) {
                res.status(200).json({
                    success: true,
                    message: "The user was successfully modified!",
                    data: user,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "The user was not found",
                });
            }
        } catch (error) {
            next(error)
        }
    },
            





}
    

    











module.exports = controller;