angular.module('app.controller')
	.controller('app', app);
app.$inject = [
	'menus',
	'dataService',
	'$confirm',
	'$rootScope',
	'$scope'
];
function app(menus,dataService,$confirm,$rootScope,$scope) {
    $scope.menus = menus;
	activate();
	////////////////
	function activate() {
	}
    $rootScope.delObj = delObj;
    function delObj(objName,selectRows,callback){
        $confirm({
            title: 'delete',
            ok: 'confirm',
            cancel: 'cancel'}
        ).then(function() {
            angular.forEach(selectRows,function(data,index){
                var objId = data.objectId;
                dataService.del(objName,objId,function(){
                    callback();
                },function(error){

                    console.log(error);
                });
            });
        });
    };
};
