const mongoose = require('mongoose');
const { Schema } = mongoose;

const Source = new Schema({
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
    }
})

module.exports = mongoose.model('source', Source);