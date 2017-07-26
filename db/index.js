const mongoose = require('mongoose');
const url = 'mongodb://xiaoshen:123456@ds153352.mlab.com:53352/hsdb';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  name: {type: String},
  password: {type: String}
});

module.exports.user = mongoose.model('login', userShema);
