let User = require('./schemas');
let conn = require('../config/db');


let newUser = new User({
    name:'abcd',
    salt:'salt',
    password:'12345'
});
console.log('test');
newUser.save(function (err, User){
    if(err){
        console.log('couldnt save user!');
    }
    else{
        console.log('saved user!');
    }
});

let findUsers = new User();
findUsers.find(function(err,response){
    console.log(response);
});