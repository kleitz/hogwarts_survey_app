app.controller('splashController', ['$scope', 'survey', '$http', '$location', 'apicalls', function($scope, survey, $http, $location, apicalls) {

$scope.openEnvelope = false;
$scope.envelopeToggle= function() {
  $scope.openEnvelope = true;
  $(".closed").fadeOut();
  console.log("some shit");
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
    $scope.scrollAnswers = function(arg) {
      $("." + arg).fadeOut();
      $("." +( arg + 1)).fadeOut()
      $("." +( arg + 1)).fadeIn('slow')
    }
  // $scope.clickClosed = function() {
  //     $(".closed").fadeOut();
  //     console.log("some shit");
  //   }
  $scope.questionScroll = survey.questionScroll;
  $scope.getSorted = survey.getSorted;
  $scope.answerSelect = survey.answerSelect;
  $scope.sortingHat = survey.sortingHat;
  $scope.sortingHat.name = survey.sortingHat.name;
  $scope.sortingHat.fbId = survey.sortingHat.fbId;
  $scope.sortingHat.gryffindor = survey.sortingHat.gryffindor;
  $scope.sortingHat.hufflepuff = survey.sortingHat.hufflepuff;
  $scope.sortingHat.slytherin = survey.sortingHat.slytherin;
  $scope.sortingHat.ravenclaw = survey.sortingHat.ravenclaw;
  $scope.sortingHat.dominantHouse = survey.sortingHat.dominantHouse;
  $scope.survey = survey.surveyQuestions;

//   // ===================================================================
//   //This empty array collects all the values from the sortingHat object so we can find the greatest one.
//   arr = [];
//   $scope.getSorted = function() {
//     //This iterates over our object so that we can get our values to push to "arr"
//     for (var key in $scope.sortingHat) {
//       if ($scope.sortingHat.hasOwnProperty(key)) {
//         arr.push($scope.sortingHat[key])
//       }
//       //This tells us the INDEX of the largest number in the array, that way we can access the corresponding house name.
//       var questionIndex = arr.indexOf(Math.max(...arr));
//     }
//     //The last element in the array is an empty string, so we just get that out to clean it up.
//     arr.pop()
//
//     //Here we just match up what the dominant house name should be in reference to the index.
//     if (questionIndex === 0) {
//       $scope.sortingHat.dominantHouse = 'gryffindor'
//     }
//     if (questionIndex === 1) {
//       $scope.sortingHat.dominantHouse = 'hufflepuff'
//     }
//     if (questionIndex === 2) {
//       $scope.sortingHat.dominantHouse = 'slytherin'
//     }
//     if (questionIndex === 3) {
//       $scope.sortingHat.dominantHouse = 'ravenclaw'
//     }
//     console.log($scope.sortingHat);
//   }
// // ===================================================================
//
//
//
//
// // ===================================================================
//   $scope.answerSelect = function(answer) {
//     if (answer.house === 'gryffindor') {
//       $scope.sortingHat.gryffindor += 1;
//     }
//     if (answer.house === 'slytherin') {
//       $scope.sortingHat.slytherin += 1;
//     }
//     if (answer.house === 'ravenclaw') {
//       $scope.sortingHat.ravenclaw += 1;
//     }
//     if (answer.house === 'hufflepuff') {
//       $scope.sortingHat.hufflepuff += 1;
//     }
//     console.log($scope.sortingHat);
//   }
//   $scope.sortingHat = {};
//   $scope.sortingHat.gryffindor = 0;
//   $scope.sortingHat.hufflepuff = 0;
//   $scope.sortingHat.slytherin = 0;
//   $scope.sortingHat.ravenclaw = 0;
//   $scope.sortingHat.dominantHouse = '';
  // $scope.survey = survey.surveyQuestions;
//   // ===================================================================

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider).then(function(results){
      // console.log($location.path('/#/'));
      console.log(results.data.body.message);
      $location.path('/1')
    });

  };
}])
