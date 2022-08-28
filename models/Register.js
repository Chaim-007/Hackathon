const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    age : {
        type: Number,
    },
    email: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
    },

    Language: {
        type: String,
    },
    date: {
        type: Date,
        default: new Date,
    },
})

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;