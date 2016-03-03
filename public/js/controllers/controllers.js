app.controller('splashController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.lolz = "Hello Wizarding World!!!"
  var request = $http({
  method: 'POST',
  url: 'http://localhost:3000/api/name',
  data:
  {
    flavor: 'tacos',
    description: 'boss',
    imageUrl: 'daSheet'
  },
  headers: {
      'permission': '/*/',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
    }
})
  request.success(function(results) {
    console.log(results)
    $scope.lolz = results
  })
// $http.get('http://localhost:3000/api/name').then(function(results){
//   console.log(results.data);
// })


}])

app.controller('surveyController', ['$scope', function($scope, $routeParams) {
  $scope.survey = "Hello Wizarding World, here's a survey!!!"
}])
