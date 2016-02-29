angular.module('app.controller')
	.controller('signin', signin);

signin.$inject = ['$rootScope', '$scope','$state', 'usersService'];

function signin($rootScope, $scope,$state, usersService){

	$scope.login = function(){
		var queryParams = {};
		queryParams = {
            username : $scope.data.username,
			password : $scope.data.password
		}
		usersService.subLogin(queryParams,function(data){
            if(data){
                var globals = {
                    currentUser: {
                        id:data.objectId,
                        username:data.username,
                        phoneNum:data.mobilePhoneNumber,
                        sessionToken:data.sessionToken
                    }
                };
                $rootScope.$broadcast('userSignIn', globals);
                alert("登录成功");
                $state.go('app.blank');
            }else{
                alert('请验证手机号');
            }
		},function(){
			console.log('error');
		});
	}
}

