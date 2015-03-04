
appServices.controller('TodoList', function ($scope, localStorageService, domElementService){


$scope.load = function() {
	$scope.title = '';
	$scope.value = '';
	$scope.description = '';

	 $scope.todo = localStorageService.getObject('todo-data');

	 $.each($scope.todo, function (index, params) {
	       domElementService.generateDrag(params);
	 });

	 $('.task-list.task-container').droppable({
	        drop: function (event, ui) {
	        	var id = ui.helper.attr("id").replace(defaults.taskId, "");
	                var object = $scope.todo[id];

	                    // Removing old element
	                    domElementService.removeElement(object);
	                    
	                    var itemModelObject = new itemModel().convertFromObject(object);
	                    itemModelObject.setStatus(this.id);
	                    // Generating new element
	                     domElementService.generateDrag(itemModelObject);

	                    $scope.todo[id] = itemModelObject;
	                    $scope.updateLocalStorage();
	                    $scope.clearFields();
	                    // Hiding Delete Area
	                    $("#" + defaults.deleteDiv).hide();
	            }
	    });

	// Adding drop function to delete div
	 $("#" + defaults.deleteDiv).droppable({
	            drop: function(event, ui) {
	            	var id = ui.helper.attr("id").replace(defaults.taskId, "");
	                var object = $scope.todo[id];

	                // Removing old element
	                domElementService.removeElement(object);

	                
	                delete $scope.todo[id];

	                // Updating local storage
	                $scope.updateLocalStorage();

	                // Hiding Delete Area
	                $("#" + defaults.deleteDiv).hide();
	            }
	        });
};
 $scope.addItem = function() {
        var errorMessage = "Title can not be empty",
            tempData;


        if (!this.title) {
            alert(errorMessage);
            return;
        }
        
        tempData = new itemModel (this.title, this.description, this.value);

        // Saving element in local storage
        $scope.todo[tempData.id] = tempData;        

       domElementService.generateDrag(tempData);

       this.updateLocalStorage();

       this.clearFields();
       
    };

  $scope.clearData = function() {
  	 $scope.todo = [];

  	 this.updateLocalStorage();

  	 $("." + defaults.todoTask).remove();
  };

  $scope.clearFields = function(){
  	this.title = '';
  	this.description = '';
  	this.value = '';
  }

 $scope.updateLocalStorage = function() { 	
 	localStorageService.setObject('todo-data', $scope.todo);
 };

});
