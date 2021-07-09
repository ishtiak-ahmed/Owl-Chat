const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    conversationID: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: {
        type: Date.now
    }
})

model.exports = Message = model('Message', messageSchema);