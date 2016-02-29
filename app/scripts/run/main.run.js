angular.module('app.run')
    .run([
        'appInfo',
        '$rootScope',
        mainRun
    ]);
function mainRun(appInfo,$rootScope){
    $rootScope.appInfo = appInfo;
};
