var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/name', function(req, res, next) {
  console.log('Worked~!!!');
  console.log(req.body)
  res.send('good job')
});








module.exports = router;
