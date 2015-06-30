var App = angular.module("App", ["ngRoute"]);

App.factory("fetchPopular", function($http) {

  var data = function(callback) {
    var endPoint = "https://api.instagram.com/v1/users/768694115/media/recent/?client_id=48510c6730494f2bb77674473d0eaf42&callback=JSON_CALLBACK";

    $http.jsonp(endPoint).success(function(response) {
      callback(response.data);
    });
  };
 
  return (data);
});

App.factory("fetchPic", function($http) {

  var data = function(callback) {
    var endPoint = "https://api.instagram.com/v1/media/1017503313991586633_768694115?client_id=48510c6730494f2bb77674473d0eaf42&callback=JSON_CALLBACK";

    $http.jsonp(endPoint).success(function(response) {
      callback(response.data);
    });
  };
 
  return (data);
});
  
App.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
  })

  // route for the about page
  .when('/details', {
      templateUrl : 'pages/details.html',
      controller  : 'detailsController'
  })
})

App.controller("mainController", function($scope, $interval, $location, fetchPopular) {
  $scope.pics = [];
  $scope.have = [];
  $scope.orderBy = "-likes.count";
  $scope.getMore = function() {
    fetchPopular(function(data) {
      for (var i = 0; i < data.length; i++) {
        if (typeof $scope.have[data[i].id] === "undefined") {
          $scope.pics.push(data[i]);
          $scope.have[data[i].id] = "1";
        }
      }
    });
  };
  $scope.changeView = function(view){
    $location.path(view); // path not hash
  }
  $scope.getMore();
});

App.controller("detailsController", function($scope, $interval, fetchPic) {
  $scope.pic = [];
  $scope.getPic = function() {
    fetchPic(function(data) {
      $scope.pics.push(data);
    });
  };
  $scope.getPic();
});