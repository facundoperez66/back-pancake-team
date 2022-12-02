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
        .array()
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
    duration: joi
        .number()
        .required()
        .messages({
            "any.required": "The field 'Duration' is required, please enter it",
            "number.base": "The field 'Duration' must be a number",
            "number.empty": "The field 'Duration' is required, please enter it",
        }),
    description: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'Description' is required, please enter it",
            "string.empty": "The field 'Description' mustn't be empty, please fill it",
            "string.base": "The field 'Description' must be a string",
        }),
    cityId: joi
        .string()
        .required()
        .messages({
            "any.required": "The field 'City ID' is required, please enter it",
            "string.empty": "The field 'City ID' mustn't be empty, please fill it",
            "string.base": "The field 'City ID' must be a string",
        }),
});

module.exports = schema;