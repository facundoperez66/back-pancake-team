const joi = require('joi');

const schema = joi.object({
    hotelId: joi
        .string()
        .required()
        .messages({
            "string.empty": "Hotel ID is required",
            "any.required": "Hotel ID is required"
        }),
    name: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'name' is required, please enter it",
            "string.empty": "The field 'name' is required, please enter it",
            "string.base": "Enter the name of the show please",
        }),
    description: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Description' is required, please enter it",
            "string.empty": "The field 'Description' mustn't be empty, please fill it",
            "string.base": "The field 'Description' must be a string",
        }),
    photo: joi
        .string()
        .uri()
        .required()
        .messages({
            "any.required": "The field 'URL photo' is required, please complete it",
            "string.uri": "The field 'URL photo' must be an url",
            "any.required": "The field 'photo' is required, please enter it",
            "string.base": "Enter the photo of the show please",
            'string.empty': "The field 'photo' is required, please enter it"
        }),
    price: joi
        .number()
        .required()
        .messages({
            "any.required": "The field 'Price' is required, please enter it",
            "number.base": "The field 'Price' must be a number",
            "number.empty": "The field 'Price' is required, please enter it",
        }),
    date: joi
        .date()
        .required()
        .messages({
            "any.required": "The field 'Date' is required, please enter it",
            "date.base": "The field 'Date' must be a date",
            "date.empty": "The field 'Date' is required, please enter it",
        }),
    userId: joi
        .string()
        .required()
        .messages({
            "string.empty": "User ID is required",
            "any.required": "User ID is required"
        }),

});

module.exports = schema;