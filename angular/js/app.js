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
    .when('/thedarklordreturns', {
      templateUrl: 'partials/survey2.html',
      controller: 'surveyController'
    })
    $authProvider.facebook({
        clientId: '1006279116108926',
        url: 'https://mighty-refuge-77675.herokuapp.com/auth/facebook',
        // authorizationEndpoint:'https://www.facebook.com/v2.5/dialog/oauth',
        // redirectUri: 'https://mighty-refuge-77675.herokuapp.com/',
        scope: ['email'],
        scopeDelimiter: ',',
        profileFields: ['name', 'id', 'picture.type(large)', 'emails']
      });



//  clientId: 1006279116108926,
})
