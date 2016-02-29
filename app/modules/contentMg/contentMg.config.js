angular.module('app.config')
.config([
        '$stateProvider',
        contentMgConfig
]);
function contentMgConfig($stateProvider) {
    $stateProvider
    .state('app.contentMg', {
        url: '/contentMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/contentMg.html'
            }
        }
    })
    .state('app.activityMg', {
        url: '/activityMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/activityMg/activityMg.html',
                controller:'activityMg'
            }
        }
    })
    .state('app.activityTypeMg', {
        url: '/activityTypeMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/activityTypeMg/activityTypeMg.html',
                controller:'activityTypeMg'
            }
        }
    })
    .state('app.newsMg', {
        url: '/newsMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/newsMg/newsMg.html',
                controller:'newsMg'
            }
        }
    })
    .state('app.newsTypeMg', {
        url: '/newsTypeMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/newsTypeMg/newsTypeMg.html',
                controller:'newsTypeMg'
            }
        }
    })
    .state('app.companyMg', {
        url: '/companyMg',
        views:{
            'appContent':{
                templateUrl: 'modules/contentMg/companyMg/companyMg.html',
                controller:'companyMg'
            }
        }
    })
    ;
}
