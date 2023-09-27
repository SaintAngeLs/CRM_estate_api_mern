const mongoose = require('mongoose');

const emailHistory = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipient: { type: String },
    // cc: { type: String },
    // bcc: { type: String },
    subject: { type: String },
    startDate: { type: String, default: Date.now },
    endDate: { type: String },
    message: { type: String },

    createByLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lead",
    },

    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
    },
    // the time stamp is available
    timestamp: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('EmailHistory', emailHistory);
