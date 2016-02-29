angular.module('app.run')
.run([
    'localStorageService',
    '$rootScope',
    '$state',
    signRun
]);
function signRun(localStorageService,$rootScope,$state){
    activited();

    function activited(){
        $rootScope.globals = localStorageService.get('globals') || {};
        if($rootScope.globals.currentUser){
            $rootScope.isLogin = true;
            $state.go('app.blank');
        }else{
            $rootScope.isLogin = false;
        };
    };

    $rootScope.$on('userSignIn', function (event, data) {
        localStorageService.set('globals', data);
        activited();
    });
    $rootScope.$on('userSignOut', function () {
        localStorageService.remove('globals');
        activited();
    });
}
