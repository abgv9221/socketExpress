var express = require('express');
var router = express.Router();

//Como llamaria io aca para poder usarlo? 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
