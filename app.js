var app = angular.module("PollApp", []);
app.controller("PreviewController", function(){
    this.polls = polls;
    /**
     * function that determines an answer choice's vote percentage
     * @param poll - The poll within the list of polls to calculate a percentage
     *               for
     * @param choice - The answer choice to calculate a percentage for the
     *                 specific poll
     */
    this.votePercentage = function(poll, choice){
        return poll.answers[choice]["votes"] / poll["votes"];
    }
});

var polls = [
    {
        name: "Best Flavor of Ice Cream?",
        id: 0,
        votes: 0,
        answers: [
            { choice: "Vanilla", votes: 0 },
            { choice: "Chocolate", votes: 0 },
            { choice: "Strawberry", votes: 0 }
        ]
    },
    {
        name: "Favorite Vacation Spot?",
        id: 1,
        votes: 55,
        answers: [
            {choice: "Mexico", votes: 10},
            {choice: "Cancun", votes: 30},
            {choice: "Japan", votes: 25}
        ]
    }
];