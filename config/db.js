let moongose = require('mongoose');

const DB_NAME = 'hunger';
const DB_URL = 'mongodb://localhost/hunger';

moongose.connect(DB_URL);

let connection = moongose.connection;

connection.on('connected',function(){
    console.log('connected to '+DB_NAME);
});

connection.on('disconnected',function(){
    console.log('disconnected to '+DB_NAME);
});

connection.on('error',function(err){
    console.log('db connection error',err);
});

process.on('SIGINT',function(){
    connection.close(
        function(){
            console.log('db connection closed due to process termination!');
            process.exit(0);
        }
    );
});

module.exports = connection;