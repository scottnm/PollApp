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
        return (choice["votes"] / poll["votes"] * 100).toFixed(0);
    }
});

var polls = [
    {
        name: "Best Flavor of Ice Cream?",
        votes: 12,
        answers: [
            { choice: "Vanilla", votes: 3},
            { choice: "Chocolate", votes: 4},
            { choice: "Strawberry", votes: 5}
        ]
    },
    {
        name: "What is the best Programming Language?",
        votes: 41,
        answers: [
            { choice: "Python", votes: 18 },
            { choice: "JavaScript", votes: 23 },
            { choice: "Java", votes: 0 }
        ]
    },
    {
        name: "Who is the best?",
        votes: 1000,
        answers: [
            { choice: "Xavier", votes: 750 },
            { choice: "Scott", votes: 250 }
        ]
    },
    {
        name: "Favorite Vacation Spot?",
        votes: 55,
        answers: [
            {choice: "Mexico", votes: 10},
            {choice: "Cancun", votes: 30},
            {choice: "Japan", votes: 25}
        ]
    },
    {
        name: "Best Television Show?",
        votes: 1390,
        answers: [
            {choice: "Jojo's Bizarre Adventure", votes: 999},
            {choice: "The Walking Dead", votes: 304},
            {choice: "Breaking Bad", votes: 87}
        ]
    }
];