const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        default: 'Unspecified'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
