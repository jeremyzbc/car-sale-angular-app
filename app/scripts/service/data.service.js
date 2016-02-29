
angular.module('app.service')
.factory('dataService',dataService);
dataService.$inject = [
    'Restangular',
    '$rootScope',
];
function dataService(Restangular,$rootScope){
    var header = {"Content-Type":"application/json"};
    var baseReq = Restangular.one("classes");

    var service = {
        add:add,
        getById:getById,
        getByParams:getByParams,
        update:update,
        del:del,
        getUsers:getUsers,
        getAll:getAll,
        get:get
    };
    return service;

    function add(object,successCall,errorCall){
        baseReq.post(object.className,object,null,header).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };
    function getById(subRouter,objId,successCall,errorCall){
        var subReq = baseReq.one(subRouter,objId);
        subReq.get().then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };
    function getByParams(subRouter,params,successCall,errorCall){
        var subReq = baseReq.one(subRouter);
        subReq.get(params).then(function(data){

            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };
    function update(object,successCall,errorCall,params){
        var singleRouter = baseReq.one(object.className,object.objectId);
        var newHearder = angular.copy(header);
        newHearder["X-LC-Session"] = $rootScope.globals.currentUser.sessionToken;
        console.log(newHearder);
        singleRouter.customPUT(object,null,params,newHearder).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
        //
        //var singleRouter = baseReq.one(object.className,object.objectId);
        //singleRouter.customPUT(object,null,null,header).then(function(data){
        //    successCall(data);
        //},function(error){
        //    if(errorCall){
        //        errorCall(error);
        //    }else{
        //        console.log(error);
        //    }
        //});
    };
    function del(subRouter,objId,successCall,errorCall){
        var singleRouter = baseReq.one(subRouter,objId);
        var params = {
            _method:"DELETE",
            _ApplicationId:"MJiy0kC5NwTqt0VB15y89CVf",
            _ApplicationKey:"ie3aqMKHfMIjh9luQaGco5GV"
        };
        singleRouter.customDELETE(null,null,header).then(function(data){
        //singleRouter.post(null,null,params,header).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }else{
                console.log(error);
            }
        });
    };

    function getUsers(userId,successCall,errorCall){
        var userRouter = Restangular.one("users",userId);
        userRouter.get().then(function(data){
            successCall(data);
        },function(error){
            errorCall(error);
        });
    };
    function getAll(subRouter,queryParams,successCall,errorCall){
        var getRouter = baseReq.one(subRouter);
        getRouter.get(queryParams).then(function(data){
            successCall(data);
        },function(error){
            errorCall(error);
        });
    };
    function get(subRouter,queryParams,successCall,errorCall){
        var getRouter = baseReq.one(subRouter);
        getRouter.get(queryParams).then(function(data){
            successCall(data);
        },function(error){
            if(errorCall){
                errorCall(error);
            }
        });
    };
};
