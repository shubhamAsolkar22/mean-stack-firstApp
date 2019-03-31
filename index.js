var express = require('express');
var app = express();
var things = require('./routes/things');
var monkey = require('./routes/monkey');

function middleware1(req,res,next){
    console.log('pre-middleware1');
    next();
    console.log('post-middleware1');
}

function finalHandler(req,res,next){
    console.log('finalhandler');
    res.send("from final handler");
}

app.use('/things',things);
app.use('/monkey',monkey);

app.use('/middlewareDemo',middleware1,finalHandler);

app.listen(3000);
