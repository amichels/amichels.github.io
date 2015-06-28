angular.module("myApp", [])
  .factory('instagram', ['$http',
    function($http) {
      return {
        fetchPopular: function(callback) {

          var endPoint = "https://api.instagram.com/v1/users/768694115/media/recent/?client_id=48510c6730494f2bb77674473d0eaf42&callback=JSON_CALLBACK";

          $http.jsonp(endPoint).success(function(response) {
            callback(response.data);
          });
        }
      }
    }
  ])
  .controller("Example", function($scope, $interval, instagram) {
    $scope.pics = [];
    $scope.have = [];
    $scope.orderBy = "-likes.count";
    $scope.getMore = function() {
      instagram.fetchPopular(function(data) {
        for (var i = 0; i < data.length; i++) {
          if (typeof $scope.have[data[i].id] === "undefined") {
            $scope.pics.push(data[i]);
            $scope.have[data[i].id] = "1";
          }
        }
      });
    };
    $scope.getMore();
  });