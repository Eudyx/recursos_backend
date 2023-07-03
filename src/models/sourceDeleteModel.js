const mongoose = require('mongoose');
const { Schema } = mongoose;

const SourceDelete = new Schema({
    title: {
        type: String,
        require: true
    },
    file: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: true
    },
    deleteDescription: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('SourceDelete', SourceDelete);