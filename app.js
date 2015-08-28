var app = angular.module("PollApp", []);
app.controller("PreviewController", function(){
    this.polls = polls;
});

var polls = [
    { name: "Poll1" },
    { name: "Poll2" }
];