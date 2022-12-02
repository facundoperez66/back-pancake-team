const joi = require('joi');

const schema = joi.object({
    showId: joi
        .string()
        .messages({
            'string.base': `event ID must be a type of 'text'`,
            'any.required': 'The event ID field is required',
            'string.empty': 'The event ID field is empty',
        }),
    eventId: joi
        .string()
        .messages({
            'string.base': `event ID must be a type of 'text'`,
            'any.required': 'The event ID field is required',
            'string.empty': 'The event ID field is empty',
        }),
    name: joi
        .string()
        .required()
        .messages({
            'string.base': `Name must be a type of 'text'`,
            'any.required': 'The name field is required',
            'string.empty': 'The name field is empty',
        }),
    icon: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.base': `Icon must be a type of 'text'`,
            'any.required': 'The icon field is required',
            'string.empty': 'The icon field is empty',
        }),
    iconBack: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.base': `Icon back must be a type of 'text'`,
            'any.required': 'The icon back field is required',
            'string.empty': 'The icon back field is empty',
        }),
    userId: joi
        .array()
        .items(joi
            .string()
            .messages({
                'string.base': `User ID must be a type of 'text'`,
            }))
        .messages({
            'array.base': `User ID must be a type of 'array'`,
        }),
});

module.exports = schema;