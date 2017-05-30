(function () {
'use strict';

var app = angular.module('myFirstApp', ['ngFlag']);

app.controller('FantasyLeagueController', function ($scope) {
	$scope.data = [{
        name: "PidePiper",
        yesterdayPoint: "200",
		total:"400",
		rank:"1"
    }, {
        name: "Hooli",
        yesterdayPoint: "200",
		total:"300",
		rank:"2"
    }, {
        name: "Octopus",
        yesterdayPoint: "100",
		total:"200",
		rank:"3"
    },{
        name: "PidePiper",
        yesterdayPoint: "200",
		total:"400",
		rank:"1"
    }, {
        name: "Hooli",
        yesterdayPoint: "200",
		total:"300",
		rank:"2"
    }, {
        name: "Octopus",
        yesterdayPoint: "100",
		total:"200",
		rank:"3"
    }];
	$scope.data1 = [{
        name: "Ravi",
        yesterdayPoint: "200",
		league:"Justice",
		total:"400",
		rank:"1"
    }, {
        name: "Parag",
        yesterdayPoint: "200",
		league:"injustice",
		total:"300",
		rank:"2"
    }, {
        name: "Jassi",
        yesterdayPoint: "100",
		league:"champion",
		total:"200",
		rank:"3"
    },{
        name: "Ravi",
        yesterdayPoint: "200",
		league:"Justice",
		total:"400",
		rank:"1"
    }, {
        name: "Parag",
        yesterdayPoint: "200",
		league:"injustice",
		total:"300",
		rank:"2"
    }, {
        name: "Jassi",
        yesterdayPoint: "100",
		league:"champion",
		total:"200",
		rank:"3"
    }];
    
    $scope.sort = {
        column: '',
        descending: false
    };    
    
    $scope.changeSorting = function(column) {

        var sort = $scope.sort;

        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
    $scope.selectedUserImage="images/ravi.jpg";
    $scope.selectedCls = function(column) {
        return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };
});

})();
