var app = angular.module("myApp", []);

app.controller("TasksCtrl", function($scope) {
  //localStorage.removeItem("taskListArr");
  
  //store task item to taskList object
  $scope.taskList = JSON.parse(localStorage.getItem("taskListArr"));

  //task list pane show/hide trigger
  console.log("Task list na starcie: ");
  console.log($scope.taskList);
  if ($scope.taskList.length !== 0) {
    $scope.showListHeader = true;
    //function to find highest id to not to repeat it
    $scope.lisOfObjId = $scope.taskList.map(function(data) {
      return data.id;
    });
    $scope.taskId = Math.max($scope.lisOfObjId)+1;
  } else {
    $scope.showListHeader = false;
    $scope.taskId = 0;
  }
  console.log($scope.showListHeader);

  

  //function to add task
  $scope.addTask = function() {
    $scope.taskId++;
    $scope.item = {
      id: $scope.taskId,
      task: $scope.task,
      date: $scope.date
    };
    $scope.taskList.push($scope.item);
    localStorage.setItem("taskListArr", JSON.stringify($scope.taskList));
    //clearing inputs
    $scope.task = "";
    $scope.date = "";
    $scope.showListHeader = true;

    //clearing invalid messages after form submit
    $scope.toDoPane.task.$setUntouched();
    $scope.toDoPane.date.$setUntouched();
    $scope.toDoPane.$setPristine();

    //deleting task from Task list
    $scope.deleteTask = function(item) {
      $scope.idOfItemToDelete = item.id;

      $scope.getTaskListArr = JSON.parse(localStorage.getItem("taskListArr"));
      $scope.lisOfObjId = $scope.getTaskListArr.map(function(data) {
        return data.id;
      });

      $scope.itemToDeletePosition = $scope.lisOfObjId.indexOf($scope.idOfItemToDelete);

      $scope.taskList.splice($scope.itemToDeletePosition, 1);
      localStorage.setItem("taskListArr", JSON.stringify($scope.taskList));
      console.log(localStorage);
    };
  };

  //table sorting
  $scope.sortType = '';

});