const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title: {
        type: String
    },
    color:{
        primary:{
            type: String
        },
        secondary:{
            type: String
        }
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;