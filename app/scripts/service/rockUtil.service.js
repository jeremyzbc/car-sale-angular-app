angular.module('app.service')
.factory('rockUtil',rockUtil);
rockUtil.$inject = [
    '$modal'
];
function rockUtil($modal){


    var service = {
        openEditModal:openEditModal
    };
    return service;

    function openEditModal(templateUrl,size,type,editObj,etraObj,sucCallback) {
        var targetEditObject = {};
        if (type == "edit" && editObj.length != 1) {
            //
        } else {
            if (type == "edit") {
                targetEditObject = angular.copy(editObj[0]);
            }
            var modalInstance = $modal.open({
                size: size || 'sm',
                animation: true,
                templateUrl: templateUrl,
                resolve: {
                    operatOpts: function () {
                        var obj = {};
                        obj.editObj = targetEditObject;
                        obj.etra = angular.copy(etraObj);
                        if (type == "add") obj.oprTitle = "";
                        if (type == "edit") obj.oprTitle = "";
                        return obj;
                    }
                },
                controller: function ($scope, $modalInstance, operatOpts) {
                    $scope.operatOpts = operatOpts;
                    $scope.ok = function () {
                        sucCallback(operatOpts.editObj);
                        $modalInstance.close();
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }
            });
        }
    }

};
