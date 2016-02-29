angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        routeConfig
]);
function routeConfig($stateProvider,$urlRouterProvider) {
    //$urlRouterProvider.otherwise('signin');
    //$urlRouterProvider.otherwise('app/contentMg/projectMg');
    $stateProvider
    .state('signin', {
        url: "/signin",
        templateUrl: "modules/signin/signin.html",
        controller: "signin"
    })
    ;
}
