var polls = [
    {
        id: 0,
        name: 'Best Flavor of Ice Cream?',
        votes: 15,
        answers: [
            { choice: 'Vanilla', votes: 3},
            { choice: 'Chocolate', votes: 4},
            { choice: 'Strawberry', votes: 5},
            { choice: 'Rocky Road', votes: 3 }
        ]
    },
    {
        id: 1,
        name: 'What is the best Programming Language?',
        votes: 41,
        answers: [
            { choice: 'Python', votes: 18 },
            { choice: 'JavaScript', votes: 23 },
            { choice: 'Java', votes: 0 }
        ]
    },
    {
        id: 2,
        name: 'Who is the best?',
        votes: 1000,
        answers: [
            { choice: 'Xavier', votes: 750 },
            { choice: 'Scott', votes: 250 }
        ]
    },
    {
        id: 3,
        name: 'Favorite Vacation Spot?',
        votes: 65,
        answers: [
            {choice: 'Mexico', votes: 10},
            {choice: 'Cancun', votes: 30},
            {choice: 'Japan', votes: 25}
        ]
    },
    {
        id: 4,
        name: 'Easiest Language To Learn?',
        votes: 14,
        answers: [
            {choice: 'Japanese', votes: 5},
            {choice: 'English', votes: 5},
            {choice: 'Spanish', votes: 4}
        ]
    },
    {
        id: 5,
        name: 'Best Television Show?',
        votes: 1390,
        answers: [
            {choice: 'Jojo\'s Bizarre Adventure', votes: 999},
            {choice: 'The Walking Dead', votes: 304},
            {choice: 'Breaking Bad', votes: 87}
        ]
    },
    {
        id: 6,
        name: 'What is the best name?',
        votes: 100,
        answers: [
            { choice: 'John', votes: 20 },
            { choice: 'Steve', votes: 20 },
            { choice: 'Bill', votes: 20 },
            { choice: 'Richard', votes: 20 },
            { choice: 'Doc', votes: 20 }
        ]
    }
];

var activePollId = -1;