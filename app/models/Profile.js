var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
	id: String,
    firstName: String,
    middleName: String,
    lastName: String,
    suffix: String,
    isMerchant: Boolean,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    personality: String,
    seeking: String,
    lookingfor: String,
    intent: String,
    handle: String,
    married: String,
    height: Number,
    bodyType: String,
    hairColor: String,
    religion: String,
    ethnicity: String,
    profession: String,
    incomeLevel: String,
    education: String,
    eyecolor: String,
    smoke: String,
    drink: String,
    ownCar: Boolean,
    haveChildren: Boolean,
    wantChildren: Boolean,
    datePersonWithKids: String,
    pets: String,
    birthOrder: String,
    secondLanguage: String,
    ambitious: String,
    headline: String,
    description: String,
    firstDate: String,
    interests: String,
    dateSmoker: Boolean,
    latitude: Number,
    longitude: Number,
    isActive: Boolean
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;