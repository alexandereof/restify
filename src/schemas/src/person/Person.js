var joi = require('joi');
var PersonSchema = {
    name: joi.string().required().min(3).max(100),
    email : joi.string().email().required().max(200)
}
module.exports = PersonSchema;