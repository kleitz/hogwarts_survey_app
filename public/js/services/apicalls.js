app.factory('apicalls', function($http){

function getAll() {
  return $http.get('http://localhost:5000/api/name')
}

function post(object) {
    var request = $http({
    method: 'POST',
    url: 'http://localhost:5000/api/name',
    data: object,
    headers: {
        'permission': '/*/',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
      }
  })

  return request
}


  return {
    getAll: getAll,
    post: post
}
})
