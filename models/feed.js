const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    hashtags: {
        type: Array,
        required: false
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }

});

const FeedModel = mongoose.model('feed', FeedSchema);//(name of the collection in the database, the schema created)
module.exports = FeedModel;
