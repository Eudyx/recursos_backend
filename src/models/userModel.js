const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    user: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String
    },
    roles: {
        User: {
            type: String,
            default: 'user'
        },
        Admin: String
    }
});

module.exports = mongoose.model('User', User);