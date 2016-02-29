angular.module('app.directive')
.directive('adminInputGroup', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/adminInputGroup/adminInputGroup.html',
        controller:"adminInputGroup",
        scope: {
            "inputTitle":"@",
            "inputType":"@",
            "inputModel":'='
        },
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});
angular.module('app.directive')
.directive('format',function($filter) {
    var directive = {
        link: link,
        require: '?ngModel'
    };
    return directive;

    function link(scope, elem, attrs, ctrl) {
        if (!ctrl) return;

        ctrl.$formatters.unshift(function (a) {
            return $filter(attrs.format)(ctrl.$modelValue)
        });

        ctrl.$parsers.unshift(function (viewValue) {
            var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
            elem.val($filter('number')(plainNumber));
            return parseInt(plainNumber);
        });
    }
});

