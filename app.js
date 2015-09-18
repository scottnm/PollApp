
'use strict';

/**
 * function that determines an answer choice's vote percentage
 * @param poll - The poll within the list of polls to calculate a percentage
 *               for
 * @param choice - The answer choice to calculate a percentage for the
 *                 specific poll
 */
function votePercentage(poll, choice){
    return (choice['votes'] / poll['votes'] * 100).toFixed(0);
};


angular.module('PollApp', ['ngRoute'])
    .controller('PreviewController', function($scope){
        $.getJSON('http://localhost:7000/getpolls', function(data){
            $scope.$apply(function(){
                $scope.polls = data;
                console.log($scope.polls);
            });
            
        });
        
        /**
        * function that determines an answer choice's vote percentage
        * @param poll - The poll within the list of polls to calculate a percentage
        *               for
        * @param choice - The answer choice to calculate a percentage for the
        *                 specific poll
        */
        $scope.votePercentage = votePercentage;
        
        $scope.updateActivePoll = function(pollId){
            activePollId = pollId;
        };
    })
    .controller('PollController', function($scope, $routeParams){
        debugger;
        $scope.poll = polls[activePollId];
        $scope.votePercentage = votePercentage;
    })
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        .when('/preview', {
            templateUrl: 'preview.html',
            controller: 'PreviewController'
        })
        .when('/poll/:pollParam', {
            templateUrl: 'pollPage.html',
            controller: 'PollController'
        })
        .otherwise({
            redirectTo: '/preview'
        });
        
        $locationProvider.html5Mode(true);
    });
