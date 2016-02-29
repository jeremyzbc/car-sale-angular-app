angular.module('app.service')
.factory('usersService',usersService);
usersService.$inject = [
    '$rootScope',
    'Restangular'
];
function usersService($rootScope,Restangular){
    var header = {"Content-Type":"application/json"};
    var requestMobilePhoneVerifyRouter = Restangular.one("requestMobilePhoneVerify");
    var requestPasswordResetBySmsCodeRouter = Restangular.one("requestPasswordResetBySmsCode");
    var resetPasswordBySmsCodeRouter = Restangular.one("resetPasswordBySmsCode");
    var verifyPhoneCodeReq = Restangular.one("verifyMobilePhone");
    var loginRouter = Restangular.one("login");
    var baseRouter = Restangular.one("users");
    var classReq = Restangular.one("classes");

    var service = {
        get:get,
        addFocus:addFocus,
        update:update,
        subLogin:subLogin,
        subSign:subSign,
        subVerifyCode:subVerifyCode,
        subResetPsw:subResetPsw,
        reqPhoneVerifyCode:reqPhoneVerifyCode,
        reqPasswordResetVerifyCode:reqPasswordResetVerifyCode,
        getById:getById,
        getByParams:getByParams
    };
    return service;
    function get(){

    }

    function addFocus(objectId,params,successCall,errorCall){
        classReq.one("_User",objectId).customPUT(params,null,null,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function update(userId,obj,successCall,errorCall){
        var newHearder = angular.copy(header);
        newHearder["X-LC-Session"] = $rootScope.globals.currentUser.sessionToken;
        baseRouter.customPUT(obj,userId,null,newHearder).then(function(data){
            successCall();
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function subLogin(params,successCall,errorCall){
        loginRouter.get(params,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function subSign(subData,successCall,errorCall){
        baseRouter.post(null,subData,null,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function subVerifyCode(phoneCode,successCall,errorCall){
        verifyPhoneCodeReq.post(phoneCode,null,null,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function subResetPsw(phoneCode,password,successCall,errorCall){
        resetPasswordBySmsCodeRouter.customPUT({password:password},phoneCode,null,header).then(function(data){
            successCall();
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function reqPhoneVerifyCode(phoneNumber,successCall,errorCall){
        requestMobilePhoneVerifyRouter.post(null,{mobilePhoneNumber:phoneNumber},null,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };
    function reqPasswordResetVerifyCode(phoneNumber,successCall,errorCall){
        requestPasswordResetBySmsCodeRouter.post(null,{mobilePhoneNumber:phoneNumber},null,header).then(function(data){
            successCall(data)
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function getById(objId,successCall,errorCall){
        var subReq = baseRouter.one(objId);
        subReq.get().then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    }
    function getByParams(queryParams,successCall,errorCall){
        baseRouter.get(queryParams).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };
};
