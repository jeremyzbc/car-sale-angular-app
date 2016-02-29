angular.module('app.directive')
.directive('dateSelect', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/dateSelect/dateSelect.html',
        controller:"dateSelectCtrl",
        scope: {
            "setModel":'='
        },
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

