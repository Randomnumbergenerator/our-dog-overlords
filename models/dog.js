// Dog model w/ Mongoose
var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
	name: { type: String, required: true },
	breed: { type: String, required: true},
	age: { type: Number, required: true },
	phrase: { type: String, required: true },
	img: { type: String, required: true },
	liked: { type: Boolean } //not required initially - only set when swiped

});

dogSchema.statics.bark = function() {
  console.log("Hi, I'm " + this.name + '. ' + this.phrase);
};

//must name first parameter as singular case of collection name
var Dog = mongoose.model('straight_corg', dogSchema);

// Make this available to our other files
module.exports = Dog;