var app = angular.module("PollApp", []);
app.controller("PreviewController", function($scope){
    
    $.getJSON('http://localhost:7000/getpolls', function(data){
        $scope.$apply(function(){
             $scope.polls = data;
             console.log($scope.polls);
        });
        
    }.bind(this));
    /**
     * function that determines an answer choice's vote percentage
     * @param poll - The poll within the list of polls to calculate a percentage
     *               for
     * @param choice - The answer choice to calculate a percentage for the
     *                 specific poll
     */
    $scope.votePercentage = function(poll, choice){
        return (choice["votes"] / poll["votes"] * 100).toFixed(0);
    }
});
