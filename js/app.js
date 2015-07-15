// .value('$anchorScroll', angular.noop) disables angular autoscroll to top on veiw change
var App = angular.module("App", ["ngRoute"]).value('$anchorScroll', angular.noop);

App.filter('currentdate',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'yyyy');
    };
}])

App.factory("fetchPopular", function($http) {

  var data = function(callback) {
    var endPoint = "https://api.instagram.com/v1/users/768694115/media/recent/?client_id=48510c6730494f2bb77674473d0eaf42&callback=JSON_CALLBACK";

    $http.jsonp(endPoint).success(function(response) {
      callback(response.data);
    });
  };
 
  return (data);
});

App.factory("fetchPic",function($http) {
  var pic = function(id) {
    this.initialize = function() {
      var endPoint = "https://api.instagram.com/v1/media/"+id+"?client_id=48510c6730494f2bb77674473d0eaf42&callback=JSON_CALLBACK";
      var self = this;
       
      // When our $http promise resolves
      // Use angular.extend to extend 'this'
      // with the properties of the response
      $http.jsonp(endPoint).then(function(response) {
        angular.extend(self, response.data);  
      });
    };
 
    // Call the initialize function for every new instance
    this.initialize();
  };
 
  // Return a reference to the function
  return (pic);
});
  
App.config(function($routeProvider) {
  $routeProvider

  .when('/home', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
  })
  .when('/details/:picId', {
      templateUrl : 'pages/details.html',
      controller  : 'detailsController'
  })
  .otherwise({
    redirectTo: '/home'
  });
})

App.controller("mainController", function($scope, $interval, fetchPopular, $location) {
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
  $scope.getMore();
  $scope.changeView = function(path,param,e){
    console.log(e);
    e.preventDefault();
    $location.path(path+param);
  };
});

App.controller("detailsController", function($scope, $interval, $routeParams, fetchPic) {
  $scope.pic = [];
  $scope.picId = $routeParams.picId;

  $scope.getPic = function(id) {
    $scope.pic.push(new fetchPic(id));
  };

  $scope.getPic($scope.picId);
  console.log($scope.pic);
});