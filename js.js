var app = angular.module("myApp", []);

//days to drop-down list
app.controller("tasks", function($scope) {

/*   //list of days to select options
  $scope.days=[];
  $scope.days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  */
$scope.showListHeader = false;

//store task item to taskList object
$scope.taskList = [];
$scope.taskId = 0;
$scope.addTask = function() {
  $scope.taskId++;
  $scope.item = {
    id: $scope.taskId,
    task: $scope.task,
    //deadline: $scope.deadline,
    date: $scope.date
  }
  $scope.taskList.push($scope.item);
  //clearing inputs
  $scope.task = "";
  //$scope.deadline = "";
  $scope.date = "";
  $scope.showListHeader = true;
};


  //deleting task from Task list
  $scope.deleteTask = function() {
     
  };
  
  //table sorting
  $scope.sortType = '';

});