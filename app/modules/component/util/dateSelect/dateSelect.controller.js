angular.module('app.controller')
.controller('dateSelectCtrl',dateSelectCtrl);
dateSelectCtrl.$inject = [
    '$scope'
];
function dateSelectCtrl($scope) {
    $scope.status = {
        beginOpen: false,
        endOpen: false
    };
    $scope.openStartDatePicker = function($event) {
        $scope.status.beginOpen = true;
    };
    $scope.openEndDatePicker = function($event) {
        $scope.status.endOpen = true;
    };
}
