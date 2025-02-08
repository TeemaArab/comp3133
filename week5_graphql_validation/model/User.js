
const mongoose = require('mongoose');


userSchema = new mongoose.Schema({
    uid:{
        type: Number,
        required: true,
    },

    firstname:{
        type: String,
        required: true,
    },
    
    lastname:{
        type: String,
        required: true,
    },

    salary:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);