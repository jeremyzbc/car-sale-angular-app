angular.module('app.directive')
.directive('activityTypeSelect', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/activityTypeSelect/activityTypeSelect.html',
        controller:"activityTypeSelectCtrl",
        scope: {
            "setModel":'='
        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

