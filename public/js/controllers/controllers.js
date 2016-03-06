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

apicalls.getAll().then(function(results){
  console.log(results);
})

$scope.get = function() {
apicalls.getAll().then(function(results){
  console.log(results);
})

}

}])


//This is our controller for our survey
app.controller('surveyController', ['$scope', 'survey', '$location', '$auth', function($scope, survey, $location, $auth) {
  arr = [];
  $scope.getSorted = function() {
    for (var key in $scope.sortingHat) {
      if ($scope.sortingHat.hasOwnProperty(key)) {
        // console.log($scope.sortingHat[key]);
        arr.push($scope.sortingHat[key])
      }
      var questionIndex = arr.indexOf(Math.max(...arr));
    }
    arr.pop()
    if (questionIndex === 0) {
      $scope.sortingHat.dominantHouse = 'gryffindor'
    }
    if (questionIndex === 1) {
      $scope.sortingHat.dominantHouse = 'hufflepuff'
    }
    if (questionIndex === 2) {
      $scope.sortingHat.dominantHouse = 'slytherin'
    }
    if (questionIndex === 3) {
      $scope.sortingHat.dominantHouse = 'ravenclaw'
    }
    console.log($scope.sortingHat);
  }

  $scope.answerSelect = function(answer) {
    if (answer.house === 'gryffindor') {
      $scope.sortingHat.gryffindor += 1;
    }
    if (answer.house === 'slytherin') {
      $scope.sortingHat.slytherin += 1;
    }
    if (answer.house === 'ravenclaw') {
      $scope.sortingHat.ravenclaw += 1;
    }
    if (answer.house === 'hufflepuff') {
      $scope.sortingHat.hufflepuff += 1;
    }
    console.log($scope.sortingHat);
  }

  $scope.sortingHat = {};
  $scope.sortingHat.gryffindor = 0;
  $scope.sortingHat.hufflepuff = 0;
  $scope.sortingHat.slytherin = 0;
  $scope.sortingHat.ravenclaw = 0;
  $scope.sortingHat.dominantHouse = '';
  $scope.survey = survey.surveyQuestions;


















  $scope.authenticate = function(provider) {
    $auth.authenticate(provider).then(function(results){
      // console.log($location.path('/#/'));
      console.log(results.data.body.message);
      $location.path('/1')
    });

  };
}])
