const joi = require("joi");

const schema = joi.object({
    userId: joi
        .string()
        .required()
        .messages({
            "string.empty": "User ID is required",
            "any.required": "User ID is required"
        }),

    name: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'name' is required, please enter it",
            "string.empty": "The field 'name' is required, please enter it",
            "string.base": "Enter the name of the itinerary please",
        }),
    photo: joi
        .string()
        .items(joi
            .string()
            .uri())
        .required()
        .messages({
            "any.required": "The field 'URL photo' is required, please complete it",
            "string.uri": "The field 'URL photo' must be an url",
            "any.required": "The field 'photo' is required, please enter it",
            "string.base": "Enter the photo of the itinerary please",
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
            "date.base": "The field 'Date' must be a number",
            "date.empty": "The field 'Date' is required, please enter it",
        }),
    description: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Description' is required, please enter it",
            "string.empty": "The field 'Description' mustn't be empty, please fill it",
            "string.base": "The field 'Description' must be a string",
        }),
    hotelId: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Hotel ID' is required, please enter it",
            "string.empty": "The field 'Hotel ID' mustn't be empty, please fill it",
            "string.base": "The field 'Hotel ID' must be a string",
        }),
});

module.exports = schema;