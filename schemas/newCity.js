const joi = require("joi")

const schema = joi.object({ 
    name: joi.string()
        .required()
        .min(2)
        .max(40)
        .messages({
            "any.required": "The name field is required",
            "string.empty": "The name field is empty",
            "string.max": "The name field must be at most 30 characters long",
            "string.min": "The name field must be at least 3 characters long"
            
        }),
    continent: joi.string()
        .required()
        .min(4)
        .messages({
            "any.required": "The continent field is required",
            "string.base": "Continent must be a type of 'text'",
            "number.min": "The continent field must be at least 4 characters long"
        }),
    population: joi.number()
        .required()
        .messages({
            "any.required": "The population field is required",
            "string.empty": "The population field is empty"
        }),
    photo: joi.string()
        .required()
        .messages({
            "any.required": "The photo field is required",
            "string.empty": "The photo field is empty",
            
        }),
    
    userId: joi
        .string()
        .required()
        .min(24)
        .max(24)
        .messages({
            'string.base': `User ID must be a type of 'text'`,
            'any.required': 'The user ID field is required',
            'string.empty': 'The user ID field is empty',
        }),
})

module.exports = schema