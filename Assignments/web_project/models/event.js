const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    details: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    users: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: ['invited', 'accepted', 'declined'],
            default: 'invited'
        }
    }]
});

module.exports = mongoose.model('Event', EventSchema);
