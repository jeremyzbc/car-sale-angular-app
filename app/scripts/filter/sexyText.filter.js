angular.module('app.filter')
.filter('sexyText',function() {
    var sexyTextHash = {
        0: 'male',
        1: 'female'
    };

    return function(input) {
        return sexyTextHash[input];
    };
});
