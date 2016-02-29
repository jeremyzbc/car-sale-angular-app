angular.module('app.filter')
.filter('bigMoneyFormat',function() {
    return function(input) {
        input = input || 0;
        var out = "";

        if(input > 9999){
            out = decimal(input/10000) ;
        }else if(input > 999){
            out = decimal(input/1000);
        }else if(input > 99){
            out = decimal(input/100);
        }else{
            out = input;
        }
        function decimal(num,v) {
            v = v || 2;
            var vv = Math.pow(10,v);
            return Math.round(num*vv)/vv;
        }
        return out;
    };
});
