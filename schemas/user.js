const joi = require(`joi`)

const schema = joi.object({
    name: joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.required": "the field is required, please enter your name",
            "string.empty": "you can't leave this field empty",
            "string.min": "Your name must have at least 3 character",
            "string.max": "Your name must have a maximum of 50 characters",
            "string.base": "only letters and numbers are valid"
        }),
    lastName: joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.required": "the field is required, please enter your last name",
            "string.empty": "you can't leave this field empty",
            "string.min": "Your last name must have at least 3 character",
            "string.max": "Your last name must have a maximum of 50 characters",
            "string.base": "only letters and numbers are valid"
        }),
    photo: joi
        .string()
        .required()
        .messages({
            "string.required": "the field is required, please enter your photo",
            "string.empty": "you can't leave this field empty",
            "string.base": "only letters and numbers are valid"
        }),
    age: joi
        .number()
        .required()
        .min(18)
        .max(100)
        .messages({
            "number.required": "the field is required, please enter your age",
            "number.empty": "you can't leave this field empty",
            "number.min": "You must be at least 18 years old",
            "number.max": "You must be at most 100 years old",
            "number.base": "only numbers are valid"
        }),
    email: joi
        .string()
        .required()
        .email()
        .messages({
            "string.required": "the field is required, please enter your email",
            "string.empty": "you can't leave this field empty",
            "string.email": "please enter a valid email",
            "string.base": "only letters and numbers are valid"
        }),
    password: joi
        .string()
        .required()
        .min(4)
        .max(30)
        .messages({
            "string.required": "the field is required, please enter your password",
            "string.empty": "you can't leave this field empty",
            "string.min": "Your password must have at least 4 character",
            "string.max": "Your password must have a maximum of 30 characters",
            "string.base": "only letters and numbers are valid"
        }),
})

module.exports=schema;