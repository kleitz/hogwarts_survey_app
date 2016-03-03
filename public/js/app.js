var app = angular.module('hogwarts', ['ngRoute']);

app.config(function($routeProvider){
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
    .when('/5', {
      templateUrl: 'partials/survey5.html',
      controller: 'surveyController'
    })
})
