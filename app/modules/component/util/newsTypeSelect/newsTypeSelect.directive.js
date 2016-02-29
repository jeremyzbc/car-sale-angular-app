angular.module('app.directive')
.directive('newsTypeSelect', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/newsTypeSelect/newsTypeSelect.html',
        controller:"newsTypeSelectCtrl",
        scope: {
            "setModel":'='
        },
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

