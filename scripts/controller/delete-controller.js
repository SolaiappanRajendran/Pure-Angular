appServices.controller('DeleteController', function ($scope, $modalInstance, $timeout, currentItem) {

  $scope.item = currentItem;
 
  $scope.ok = function () {
    $modalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };



});