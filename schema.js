const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title : joi.string().required(),
        description : joi.string().required(),
        img : joi.string().allow("", null),
        price : joi.number().min(0).required(),
        country : joi.string().required(),
        location : joi.string().required()
    }).required()
})

module.exports.reviewSchema = joi.object({
    review : joi.object({
        comment : joi.string().required(),
        rating : joi.number().min(1).max(5),
    }).required()
})