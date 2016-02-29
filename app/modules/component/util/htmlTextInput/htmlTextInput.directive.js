angular.module('app.directive')
.directive('htmlTextInput', function() {
    var directive = {
        link: link,
        templateUrl: 'modules/component/util/htmlTextInput/htmlTextInput.html',
        controller:"htmlTextInputCtrl",
        scope: {
            "setModel":'='
        },
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
    }
});

