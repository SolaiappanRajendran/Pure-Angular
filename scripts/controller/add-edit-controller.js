appServices.controller('AddEditController', function ($scope, $modalInstance, currentItem, operation) {

  $scope.item = currentItem;

 $scope.operation = operation;
  $scope.ok = function () {

    if(!$scope.item.title || $scope.item.title == '') {
      alert('Please fill the title');
      return;
    }

    if(!$scope.item.date || $scope.item.date == '') {
      alert('Please fill the date');
      return;
    }

    $modalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

 // date picker model

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

 

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = 'dd/MMM/yyyy';

});