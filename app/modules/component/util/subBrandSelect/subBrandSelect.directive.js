angular.module('app.directive')
.directive('subBrandSelect', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/subBrandSelect/subBrandSelect.html',
        controller:"subBrandSelectCtrl",
        scope: {
            "setModel":'='
        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

