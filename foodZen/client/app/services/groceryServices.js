angular.module('foodZen.grocery-services', [])
.factory('Groceries', [ '$http', function ($http){

  var groceries = [];

  var getGroceryList = function() {
    return $http({
      method: 'GET',
      url: '/api/groceries'
    }).then(function (res) {
      console.log('got dem groceries');
      groceries = res.data;
      return res.data;
    }, function (error) {
      console.error('error with getting groceries');
    });
  };

  var postGroceries = function(groceryArray) {
    return $http({
      method: 'POST',
      url: '/api/groceries',
      data: {groceries: groceryArray}
    }).then(function(res){
      console.log('success with the grocery post !');
    }, function(error){
      console.error('error with posting groceryList');
    });
  };

  var deleteGroceries = function(grocery) {
    return $http.delete('/api/groceries', {params: {grocery: grocery}})
    .then(function(res){
      console.log('success with the grocery delete !');
    }, function(error){
      console.error('error with grocery delete');
    });
  };

  return {
    getGroceryList: getGroceryList,
    postGroceries: postGroceries,
    deleteGroceries: deleteGroceries,
    groceries: groceries
  };
}]);