const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountVerificationEmail');
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses');
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
            return userSignedUpResponse(req, res)
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
            return userNotFoundResponse(req, res)

        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        let { password } = req.body;
        let { user } = req;
        try {
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                const user1 = await User.findOneAndUpdate({ _id: user.id }, { logged: true }, { new: true })
                let token = jwt.sign(
                    {
                        id: user1._id,
                        name: user1.name,
                        photo: user1.photo,
                        logged: user1.logged,
                        role: user1.role,
                    },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }

                )

                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: `Hello ${user1.name}, welcome!`
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },


    loginWithToken: async (req, res, next) => {

        let { user } = req;
        try {
            return res.json({
                response: {
                    user: {
                        id: user.id,
                        name: user.name,
                        photo: user.photo,
                        logged: user.logged,
                        role: user.role,
                    },
                },
                success: true,
                message: `Welcome ${user.name}`
            })

        } catch (error) {
            next(error)
        }
    },

    logout: async (req, res, next) => {
        const { id } = req.user;

        try {
            let user = await User.findOneAndUpdate(
                { _id: id },
                { logged: false },
                { new: true }
            );

            return userSignedOutResponse(req, res);
        } catch (error) {
            next(error);
        }
    },

    readOne: async (req, res, next) => {
        let id = req.params.id;
        try {
            let user = await User.findById({ _id: id })
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'the user was found successfully!.',
                    data: user,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'the user was not found.',
                })
            }
        } catch (error) {
            next(error)
        }
    },

    update: async (req, res, next) => {
        let id = req.params.id;
        if (req.body.password) {
            let { password } = req.body;
            password = bcryptjs.hashSync(password, 10);
            req.body.password = password;
        }


        try {
            let user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });

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