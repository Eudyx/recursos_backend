const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDelete = new Schema({
    user: {
        type: String,
        require: true
    },
    deleteDescription: {

    }
})

module.exports = mongoose.model('UserDelete', UserDelete);