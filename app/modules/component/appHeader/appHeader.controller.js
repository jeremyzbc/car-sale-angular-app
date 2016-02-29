angular.module('app.controller')
	.controller('appHeader', appHeader);
appHeader.$inject = [
    '$state',
    '$rootScope',
	'$scope'
];
function appHeader($state,$rootScope,$scope) {
    $scope.appInfo = $rootScope.appInfo;
    $scope.direct = direct;
    $scope.data = {};

    function direct(menu,index){
        $scope.data.selectMenu = index;
        $state.go(menu.url,{"menus": menu.subMenus});
       
    };
};
