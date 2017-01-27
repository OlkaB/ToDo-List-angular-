var app = angular.module("myApp", []);

//days to drop-down list
app.controller("TasksCtrl", function($scope) {

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

//deleting task from Task list
  $scope.deleteTask = function(item) {    
  console.log("Task list before deletion: ");
  console.log($scope.taskList);
  //console.log($scope.taskList[0].id);
  $scope.idOfItemToDelete = item.id;
  

  $scope.lisOfObjId = $scope.taskList.map(function(data) {
  return data.id; 
  });
  console.log('List of obj id: ');
  console.log($scope.lisOfObjId);

  console.log('idOfItemToDelete: ');
  console.log($scope.idOfItemToDelete);

  //this part is not working correctly
  $scope.itemToDeletePosition = $scope.lisOfObjId.indexOf($scope.idOfItemToDelete);
  console.log('item To Delete Position: ');
  console.log($scope.itemToDeletePosition);
  //up

  $scope.taskList.splice($scope.itemToDeletePosition, 1);
  console.log("Task list after deletion: ");
  console.log($scope.taskList);
 };
};



 
  //table sorting
  $scope.sortType = '';

});