'use strict';

function mainCtrl ($scope, dataService) {
  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
    });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };
};

mainCtrl.$inject = ['$scope', 'dataService'];

module.exports = mainCtrl;
