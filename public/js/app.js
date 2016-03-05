var app = angular.module('hogwarts', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/splash.html',
      controller: 'splashController'
    })
    .when('/1', {
      templateUrl: 'partials/survey1.html',
      controller: 'surveyController'
    })
    .when('/2', {
      templateUrl: 'partials/survey2.html',
      controller: 'surveyController'
    })
    .when('/3', {
      templateUrl: 'partials/survey3.html',
      controller: 'surveyController'
    })
    .when('/4', {
      templateUrl: 'partials/survey4.html',
      controller: 'surveyController'
    })
    .when('/auth/facebook', {
      templateUrl: 'partials/survey5.html',
      controller: 'surveyController'
    })
  // $authProvider.loginUrl = 'http://localhost:5000/auth/login';
  // $authProvider.signupUrl = 'http://localhost:5000/auth/signup';

    $authProvider.facebook({
        clientId: '1006279116108926',
        scope: ['email'],
        scopeDelimiter: ',',
        profileFields: ['name', 'id', 'picture.type(large)', 'emails']
      });



//  clientId: 1006279116108926,
})
