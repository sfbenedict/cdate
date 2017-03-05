var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var payoutSchema = new Schema({
	payoutId: String,
    id: String,
    dateId: String,
    amount: Number,
    payoutDate: Date,
    payoutType: String,
    payoutAccountNumber: String,
    payoutACHNumber: String,
    checkNumber: Number,
    checkAddress: String,
    paypalAccount: String,
    paypalConfirmation: String,
    status: String,
    isActive: Boolean
});

var Payout = mongoose.model('Payout', paymentSchema);

module.exports = Payout;