var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var request = require('request');
require('dotenv').load()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/auth/facebook', function(req,res){
  console.log('we in da routes');
  var fields = ['id', 'email', 'first_name', 'last_name'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  var params = {
  code: req.body.code,
  client_id: req.body.clientId,
  client_secret: process.env.facebook_secret,
  redirect_uri: req.body.redirectUri
 };
   request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
      if (response.statusCode !== 200) {
        console.log('*********BREAK POINT*********');
        return res.status(500).send({ message: accessToken.error.message });
      }
      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (response.statusCode !== 200) {
          return res.status(500).send({ message: profile.error.message });
        }
          var user = {}
          var image = 'https://graph.facebook.com/'+profile.id+'/picture?type=large'
          user.profilepicture = 'https://graph.facebook.com/'+profile.id+'/picture?type=large'
          user.fb_id = profile.id
          user.email = profile.email
          user.firstname = profile.first_name
          user.lastname = profile.last_name
          user.token = process.env.access_secret
          unirest.post('https://hogwartsapi.herokuapp.com/users/')
          .send(user)
          .end(function(results){
            res.send(results)
          })
      })
    });
  })





module.exports = router;
