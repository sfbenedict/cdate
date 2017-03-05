var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
	accountId: String,
    accountName: String,
    accountPassword: String,
    email: String,
    gender: String,
    dob: Date,
    createdDate: Date,
    isActive: Boolean
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;