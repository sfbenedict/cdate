var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blockedSchema = new Schema({
    blockedId: String,
    id: String,
    blockedId: String,
    blockedDate: Date,
    isActive: Boolean
});

var Block = mongoose.model('Block', blockedSchema);

module.exports = Block;