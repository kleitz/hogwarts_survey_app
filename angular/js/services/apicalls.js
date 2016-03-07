app.factory('apicalls', function($http){

function getAll() {
  return $http.get('https://mighty-refuge-77675.herokuapp.com/api/name')
}

function post(object) {
    var request = $http({
    method: 'POST',
    url: 'https://mighty-refuge-77675.herokuapp.com/api/name',
    data: object,
    headers: {
        'permission': '/*/',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
      }
  })

  return request
}
function postSurvey(object) {
var request = $http({
method: 'POST',
url: 'https://mighty-refuge-77675.herokuapp.com/api/surveys',
data: object,
headers: {
    'permission': '/*/',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
    }
  })
}


  return {
    getAll: getAll,
    post: post,
    postSurvey: postSurvey
}
})
