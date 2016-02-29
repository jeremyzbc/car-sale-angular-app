angular.module('app.directive')
.directive('adminSelectGroup', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/adminSelectGroup/adminSelectGroup.html',
        controller:"adminSelectGroup",
        scope: {
            "selectTitle":"@",
            "selectModel":'=',
            "selectOptions":'='
        },
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

