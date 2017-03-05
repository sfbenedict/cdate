var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	messageId: String,
    toId: String,
    fromId: String,
    message: String,
    messageTime: Date,
    isActive: Boolean
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;