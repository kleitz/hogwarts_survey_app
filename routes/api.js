var express = require('express');
var router = express.Router();
var unirest = require('unirest');
require('dotenv').load();

/* GET users listing. */

router.get('/name', function(req,res,next){
  unirest.get('https://hogwartsapi.herokuapp.com/users/')
  // .send({token: proces.env.access_secret })
  .end(function(results){
    console.log('got here!');
  // console.log(results.message);
    res.send(results)
  })
})


router.post('/name', function(req, res, next) {
  req.body.token = process.env.access_secret
  unirest.post('https://hogwartsapi.herokuapp.com/users/')
  .send(req.body)
  .end(function(results){
    console.log('got here!');
    res.send(results.data)
  })
});
router.get('/surveys', function(req,res,next){
  unirest.get('https://hogwartsapi.herokuapp.com/surveys/')
  // .send({token: proces.env.access_secret })
  .end(function(results){
  // console.log(results.message);
    res.send(results)
  })
})


router.post('/surveys', function(req, res, next) {
  req.body.token = process.env.access_secret
  console.log('got to surveys!');
  unirest.post('https://hogwartsapi.herokuapp.com/surveys/')
  .send(req.body)
  .end(function(results){
    res.send(results.data)
  })
});








module.exports = router;
