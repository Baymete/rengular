var app = angular.module('app', [
    'appControllers',
    'ngRoute',
    ]);

app.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider.
            when('/', {
                controller: 'index'
            }).
            // when('/programming', {
            //     templateUrl: 'partials/programming.html',
            //     controller: 'getProgramming'
            // }).
            // when('/learnprogramming', {
            //     templateUrl: 'partials/learnprogramming.html',
            //     controller: 'getLearnprogramming'
            // }).
            // when('/flask', {
            //     templateUrl: 'partials/flask.html',
            //     controller: 'getFlask'
            // }).
            when('/subreddit/:sub', {
                templateUrl: 'partials/subreddit.html',
                controller: 'getSubreddit'
            });
    }]);

