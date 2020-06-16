'use strict';

eventsApp.controller('EventController', 
    function EventController($scope) {
        $scope.boolValue = true;
        $scope.myStyle= {color: 'red'};
        $scope.snippet = '<span style="color: red;">Hi there!</span>';
        $scope.myClass = "blue";
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: './img/angularjs-logo.png',
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced', 
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit!",
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory', 
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    upVoteCount: 0
                },
                {
                    name: "Well Behaved Controllers",
                    creatorName: 'Jane Doe',
                    duration: '2 hrs',
                    level: 'Intermmediate', 
                    abstract: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will earn the respect of  your friends and neighbours!',
                    upVoteCount: 0
                },
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    }
);