const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    id: {
        type: String, 
        required: true,
        unique: true,
    },
    name: {
        type: String, 
    },
    contact: {
        type: String,
    },
    email: {
        type: String,
    }
}, { timestamps: true });  // Fix the typo here, change 'timeStamps' to 'timestamps'

module.exports = mongoose.model('Contacts', contactSchema);
