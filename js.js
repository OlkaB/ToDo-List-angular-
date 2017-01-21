var app = angular.module("myApp", []);

//days to drop-down list
app.controller("tasks", function($scope) {
  $scope.days=[];
  $scope.days = ["monday", "teusday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//store task item to taskList object
$scope.taskList = [];
$scope.taskId = 0;
$scope.addTask = function() {
  $scope.taskId++;
  $scope.item = {
    id: $scope.taskId,
    task: $scope.task,
    deadline: $scope.deadline
  }
  $scope.taskList.push($scope.item);
  
  //clearing inputs
  $scope.task = "";
  $scope.deadline = "";

  //deleting task from Task list
  $scope.deleteTask = function() {
    
  }
};



});