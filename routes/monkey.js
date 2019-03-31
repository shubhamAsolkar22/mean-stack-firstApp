var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on monkey.');
});
router.post('/', function(req, res){
   res.send('POST route on monkey.');
});
router.get('/:msg', function(req, res){
    res.send('monkey said '+req.params.msg);
 });
//export this router to use in our index.js
module.exports = router;