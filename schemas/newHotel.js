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
    capacity: joi.number()
        .required()
        .messages({
            "number.required": "The capacity field is required",
            "number.empty": "The capacity field is empty"
        }),
    photo: joi.array()
        .items(joi
            .string()
            .uri()
            )
        .required()
        .messages({
            "any.required": "The photo field is required",
            "string.empty": "The photo field is empty",
            
        }),


    
    userId: joi.string()
        .required()
        .min(24)
        .max(24)
        .messages({
            'string.base': `User ID must be a type of 'text'`,
            'any.required': 'The user ID field is required',
            'string.empty': 'The user ID field is empty',
        }),
         
    cityId: joi.string()
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