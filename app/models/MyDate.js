var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateSchema = new Schema({
	dateId: String,
    customerId: Number,
    merchantId: Number,
    dateTime: String,
    dateLocation: String,
    dateStreet: String,
    dateCity: String,
    dateState: String,
    dateZipcode: Number,
    dateNotes: String,
    datePricePerHour: Number,
    dateStartTime: Date,
    dateStartConfirmQRCode : String,
    dateEndTime: Date,
    dateEndConfirmQRCode: String,
    paymentStatus: String,
    paymentId: Number,
    dateStatus: String,
    payoutId: Number,
    payoutStatus: Number,
    zipcode: Number,
    createdDate: Date,
    customerStarts: Number,
    customerReview: String,
    merchantStars: Number,
    merchantReview: String,
    dateAccepted: Date,
    dateRequested: Date,
    isActive: Boolean
});

var MyDate = mongoose.model('MyDate', dateSchema);

module.exports = MyDate;