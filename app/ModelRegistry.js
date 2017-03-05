var mongoose = require('mongoose');
var ModelTypes = require('./ModelTypes');

var Item = require('./models/Item');
var Account = require('./models/Account');
var Block = require('./models/Block');
var Message = require('./models/Message');
var MyDate = require('./models/MyDate');
var Payment = require('./models/Payment');
var Payout = require('./models/Payout');
var Profile = require('./models/Profile');

exports.createModelInstance = function(modelType, data) {
	switch(modelType) {
		case ModelTypes.ITEM:
			return new Item(data);
			break;
		case ModelTypes.ACCOUNT:
			return new Account(data);
			break;
		case ModelTypes.BLOCK:
			return new Block(data);
			break;
		case ModelTypes.MESSAGE:
			return new Message(data);
			break;
		case ModelTypes.MYDATE:
			return new MyDate(data);
			break;
		case ModelTypes.PAYMENT:
			return new Payment(data);
			break;
		case ModelTypes.PAYOUT:
			return new Payout(data);
			break;
		case ModelTypes.PROFILE:
			return new Profile(data);
			break;
		default:
	}
};

exports.getModel = function(modelType) {
	switch(modelType) {
		case ModelTypes.ITEM:
			return Item;
			break;
		case ModelTypes.ACCOUNT:
			return Account;
			break;
		case ModelTypes.BLOCK:
			return Block;
			break;
		case ModelTypes.MESSAGE:
			return Message;
			break;
		case ModelTypes.MYDATE:
			return MyDate;
			break;
		case ModelTypes.PAYMENT:
			return Payment;
			break;
		case ModelTypes.PAYOUT:
			return Payout;
			break;
		case ModelTypes.PROFILE:
			return Profile;
			break;
		default:
	}
}
