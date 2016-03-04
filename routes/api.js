var express = require('express');
var router = express.Router();
require('dotenv').load();

/* GET users listing. */
router.post('/name', function(req, res, next) {
  console.log('Worked~!!!');
  console.log(req.body)
  req.body.token = process.env.access_secret
  
});








module.exports = router;
