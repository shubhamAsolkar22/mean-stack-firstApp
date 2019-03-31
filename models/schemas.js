let mongoose = require('mongoose');

let userSchema = mongoose.Schema(
    {
        name:String,
        salt:String,
        password:String
    }
);

let User = mongoose.model('User',userSchema);

module.exports = User;