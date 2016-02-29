angular.module('app.controller')
.controller('newsTypeSelectCtrl',newsTypeSelectCtrl);
newsTypeSelectCtrl.$inject = [
    'dataService',
    '$scope'
];
function newsTypeSelectCtrl(dataService,$scope) {
    dataService.getByParams("NewsType",null,function(data){
        $scope.NewsTypeList = data.results;
    });
}
