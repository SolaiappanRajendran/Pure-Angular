appServices.controller('TodoList', function ($scope, $modal, $log, localStorageService, todoItemService) {
	$scope.load = function() {			
		$scope.todo = localStorageService.getObject('todo-list');
		
	}

	$scope.updateStatus = function(todoItem) {
		todoItem.status='completed';
		todoItem.priority = 0;
		updateLocalStorage();
	}

	$scope.delete = function(todoItem) {
		var modalInstance = $modal.open({
		      templateUrl: 'DeleteContent.html',
		      controller: 'DeleteController',
		      size: 'sm',
		      resolve: {
		        currentItem: function() {
		        	return angular.copy(todoItem);
		        }		        
		      }
		    });

		 modalInstance.result.then(function (selectedItem) {
		      delete $scope.todo[selectedItem.index];
		      $scope.todo = todoItemService.setList($scope.todo);
		      updateLocalStorage();
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
	}
	var updateLocalStorage = function() {
		localStorageService.setObject('todo-list', $scope.todo);
	}
	var openPopup = function(currentItem, operation ) {
		var modalInstance = $modal.open({
		      templateUrl: 'myModalContent.html',
		      controller: 'AddEditController',
		      size: 'sm',
		      resolve: {
		        currentItem: function() {
		        	if(operation == 'Add') {

		        		todoItemService.setIndex($scope.todo, currentItem);
		        	}
		        	return angular.copy(currentItem);
		        },
		        operation: function() {
		        	return operation;
		        }
		      }
		    });

		 modalInstance.result.then(function (selectedItem) {
		      $scope.todo[selectedItem.index] = selectedItem;
		      updateLocalStorage();
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
	}
	$scope.openPopup = function() {
		 openPopup(new todoItemService(), 'Add');
	}

	$scope.openEditPopup = function(todoItem) {
		 openPopup(todoItem, 'Update');
	}

	$scope.canDisplay = function(todoItem) {
		if(todoItem.status == 'completed') {
			return  { visibility: 'hidden'};
		}
	}



});