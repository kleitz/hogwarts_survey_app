var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/name', function(req, res, next) {
  console.log('Worked~!!!');
  console.log(req.body)
  res.send('good job')
});








module.exports = router;
