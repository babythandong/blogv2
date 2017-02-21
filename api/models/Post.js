/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: {
            type: "string",
            unique: true,
            required: true
        },
        intro: {
            type: "string",
            unique: true
        },
        body: {
            type: "string",
            unique: true
        },
        category: "string",
        thumbnail: "string"
    }
};