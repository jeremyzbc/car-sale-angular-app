angular.module('app.filter')
.filter('userPhoneTrans',function(dataService) {

    return function(input) {
        dataService.getById("_User",input,function(data){
            return data.mobilePhoneNumber;
        });
    };
});
