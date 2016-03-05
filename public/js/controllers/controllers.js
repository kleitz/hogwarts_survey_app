app.controller('splashController', ['$scope', '$http', '$location', 'apicalls', function($scope, $http, $location, apicalls) {

$scope.welcomeEnvelope = true;
$scope.envelopeToggle= function() {
  $scope.welcomeEnvelope = !$scope.welcomeEnvelope;
}

$scope.post = function(formInfo) {

// Example Call. Normally derp would be the values from submitted form

var derp = {
    name: 'tacos',
    profilepicture: 'boss',
    fb_id: 1232
 }
apicalls.post(derp).success(function(results){
  console.log(results);

})

apicalls.post(formInfo).success(function(results){

})

}

// $scope.get = function() {
apicalls.getAll().then(function(results){
  console.log(results);

})

// }

}])

app.controller('surveyController', ['$scope', 'survey', function($scope, survey, $routeParams) {
  $scope.survey = survey.surveyQuestions;
  $scope.whatAnswer = function(item) {
    console.log(item);
  }
  $scope.houseSurvey= function(question) {
    console.log(question.answers);

  }









}])
