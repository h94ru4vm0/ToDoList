var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds017070.mlab.com:17070/username2');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  title : String,
  contain  : String
});
module.exports = mongoose.model('Person', personSchema);
