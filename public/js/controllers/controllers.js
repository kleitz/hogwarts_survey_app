app.controller('splashController', ['$scope', '$http', '$location', 'apicalls', function($scope, $http, $location, apicalls) {
  $scope.lolz = "Hello Wizarding World!!!"

var derp = {
    flavor: 'tacos',
    description: 'boss',
    imageUrl: 'daSheet'
  }
apicalls.post(derp).success(function(results){
  console.log(results)
})

}])

app.controller('surveyController', ['$scope', function($scope, $routeParams) {
  $scope.survey = "Hello Wizarding World, here's a survey!!!"
}])
