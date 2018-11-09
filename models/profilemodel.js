// const bcrypt = require("bcrypt");
var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var Userprofile = new Schema({
  
    email: {
    type: String,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "String is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  gender: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  seeking: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  image: {
    type: String,
    trim: true,
  }, 
  favMovies: {
    type: Array,
    trim: true,
  },

  favShows: {
    type: Array,
    trim: true,
  },

  favBooks: {
    type: Array,
    trim: true,
  },

  favGraphics: {
    type: Array,
    trim: true,
  },
  favMusic: {
    type: Array,
    trim: true,
  },
  favHobbies: {
    type: Array,
    trim: true,
  },
  matches: {
    type: Array,
    trim: true,
  },

  bio: {
    type: String,
    validate: [
     
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length <= 500;
      },
      // Error Message
      "Bio must be 500 characters or less."
    ]
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});


var Userprofile = mongoose.model("Userprofile", Userprofile);

// Export the Example model
module.exports = Userprofile;
