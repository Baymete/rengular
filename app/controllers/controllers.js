var appControllers = angular.module('appControllers', []);

// *** Lists and adds subreddit links ***
appControllers.controller('subreddits', function($scope){
    $scope.subs = ['programming','learnprogramming','flask'];
    $scope.addSubreddit = function(){
        $scope.subs.push($scope.inputData.sub);
    };
});

// *** Function for setting the browser's url
appControllers.controller('index', function($scope, $location){
    $scope.go = function(path){
        $location.path('/subreddit/'+path);
    };
});

// *** No longer needed since getSubreddit gets any subreddit ***

// appControllers.controller('getProgramming', function($scope, $http){
//     $http.get('http://www.reddit.com/r/programming/.json')
//     .success(function(data){
//         $scope.reddit = data.data.children;
//     });
// });

// appControllers.controller('getLearnprogramming', function($scope, $http){
//     $http.get('http://www.reddit.com/r/learnprogramming/.json')
//     .success(function(data){
//         $scope.reddit = data.data.children;
//     });
// });

// appControllers.controller('getFlask', function($scope, $http){
//     $http.get('http://www.reddit.com/r/flask/.json')
//     .success(function(data){
//         $scope.reddit = data.data.children;
//     });
// });

// *** Gets the json for any subreddit from reddit ***
appControllers.controller('getSubreddit', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams){
        $http.get('http://www.reddit.com/r/'+$routeParams.sub+'/.json')
            .success(function(data){
        $scope.reddit = data.data.children;
        $scope.sub = $routeParams.sub;
    });
}]);

appControllers.controller('subredditCtrl', function($scope){
    $scope.showText = false;
});