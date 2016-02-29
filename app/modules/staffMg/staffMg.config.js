angular.module('app.config')
.config([
        '$stateProvider',
        staffMgConfig
]);
function staffMgConfig($stateProvider) {
    $stateProvider
    .state('app.staffMg', {
        url: '/staffMg',
        params:{
            menus:null
        },
        views:{
            'appContentView':{
                templateUrl: 'modules/staffMg/staffIndex.html',
                controller:'staffMg'
            }
        }
    })
    .state('app.staffMg.staffList', {
        url: '/staffList',
        views:{
            'centerBoard':{
                templateUrl: 'modules/staffMg/staffList/staffList.html',
                controller:'staffList'
            }
        }
    })
    .state('app.staffMg.staffInfoMg', {
        url: '/staffInfoMg',
        views:{
            'centerBoard':{
                templateUrl: 'modules/staffMg/staffInfoMg/staffInfoMg.html',
                controller:'staffInfoMg'
            }
        }
    })
    ;
}
