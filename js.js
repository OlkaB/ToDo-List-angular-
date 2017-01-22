var app = angular.module("myApp", []);

//days to drop-down list
app.controller("tasks", function($scope) {

/*   //list of days to select options exchanged to date input
  $scope.days=[];
  $scope.days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  */

//tasks list show/hide controller  
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
  
  //clearing invalid messages after form submit
  $scope.toDoPane.task.$setUntouched();
  $scope.toDoPane.date.$setUntouched();
  $scope.toDoPane.$setPristine();
};


  //deleting task from Task list
  $scope.deleteTask = function() {
     $scope.elementPos = $scope.taskList.map(function(data) {
          return data.$scope.taskId; 
      }).indexOf(1);
     console.log($scope.elementPos);
     $scope.taskList.slice($scope.elementPos);
  };
  
  //table sorting
  $scope.sortType = '';

});