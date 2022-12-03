const joi = require('joi');

const schema = joi.object({
    showId: joi
        .string()
        .messages({
            'string.base': 'showId must be a string',
        }),
    itineraryId: joi
        .string()
        .messages({
            'string.base': 'itineraryId must be a string',
        }),
    userId: joi
        .string()
        .required()
        .messages({
            'string.empty': 'userId is required',
        }),
    date: joi
        .date()
        .required()
        .messages({
            'string.empty': 'date is required',
        }),
    comment: joi
        .string()
        .min(3)
        .required()
        .messages({
            'string.empty': 'comment is required',
            'string.min': 'comment must be at least 3 characters long',
        }),
});

module.exports = schema;