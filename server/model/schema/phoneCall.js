const mongoose = require('mongoose');

// isomorphic to the the email model
const phoneCall = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    recipient: { type: String },
    callDuration: { type: String },
    callNotes: { type: String },
    phoneNumber: { type: String },
    startDate: { type: String, default: Date.now },
    endDate: { type: String },
    createByLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lead",
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contacts',
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('PhoneCall', phoneCall);