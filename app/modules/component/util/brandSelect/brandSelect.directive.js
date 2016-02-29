angular.module('app.directive')
.directive('brandSelect', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/brandSelect/brandSelect.html',
        controller:"brandSelectCtrl",
        scope: {
            "setModel":'=',
            "sMode":"@"
        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

