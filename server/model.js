var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: {
    type: String
  },
  // image: {
  //   data: Buffer, contentType: String
  // },
  description: {
    type: String
  }
});

var Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;
