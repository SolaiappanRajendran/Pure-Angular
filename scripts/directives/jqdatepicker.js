appServices.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            window.setTimeout(function(){
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                onSelect: function (date) {
                    ngModelCtrl.$setViewValue(date);
                    ngModelCtrl.$render();
                    scope.$apply();
                }

            });

        }, 1000);
        }
    };
});
