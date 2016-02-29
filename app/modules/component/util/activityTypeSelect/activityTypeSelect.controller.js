angular.module('app.controller')
.controller('activityTypeSelectCtrl',activityTypeSelectCtrl);
activityTypeSelectCtrl.$inject = [
    'dataService',
    '$scope'
];
function activityTypeSelectCtrl(dataService,$scope) {
    dataService.getByParams("ActivityType",null,function(data){
        $scope.ActivityTypeList = data.results;
    });
}
