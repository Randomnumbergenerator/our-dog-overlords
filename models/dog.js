// Dog model w/ Mongoose
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	breed: { type: String, required: true},
	age: { type: Number, required: true },
	phrase: { type: String, required: true },
	img: { type: String, required: true },
	liked: { type: Boolean } //not required initially - only set when swiped

});

userSchema.statics.bark = function() {
  console.log("Hi, I'm " + this.name + '. ' + this.phrase);
};

var Dog = mongoose.model('dog', userSchema);

// Make this available to our other files
module.exports = Dog;