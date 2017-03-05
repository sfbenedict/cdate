var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
	paymentId: String,
    id: String,
    dateId: String,
    amount: Number,
    paymentAuthorizationDate: Date,
    paymentSettlementDate: Date,
    cardType: String,
    cardNumber: String,
    cardExpire: String,
    cardCVV2: String,
    cardName: String,
    cardAuthorization: String,
    status: String,
    isActive: Boolean
});

var Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;