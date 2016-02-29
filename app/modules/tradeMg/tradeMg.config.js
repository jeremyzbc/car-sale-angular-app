angular.module('app.config')
.config([
        '$stateProvider',
        tradeMgConfig
]);
function tradeMgConfig($stateProvider) {
    $stateProvider
    .state('app.tradeMg', {
        url: '/tradeMg',
        views:{
            'appContentView':{
                templateUrl: 'modules/tradeMg/tradeMg.html'
            }
        }
    })
    .state('app.seriesMg', {
        url: '/seriesMg',
        views:{
            'appContent':{
                templateUrl: 'modules/tradeMg/seriesMg/seriesMg.html',
                controller:'seriesMg'
            }
        }
    })
    .state('app.carMg', {
        url: '/carMg',
        views:{
            'appContent':{
                templateUrl: 'modules/tradeMg/carMg/carMg.html',
                controller:'carMg'
            }
        }
    })
    .state('app.orderMg', {
        url: '/orderMg',
        views:{
            'appContent':{
                templateUrl: 'modules/tradeMg/orderMg/orderMg.html',
                controller:'orderMg'
            }
        }
    })
    .state('app.brandMg', {
        url: '/brandMg',
        views:{
            'appContent':{
                templateUrl: 'modules/tradeMg/brandMg/brandMg.html',
                controller:'brandMg'
            }
        }
    })
    ;
}
