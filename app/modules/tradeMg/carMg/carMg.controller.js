angular.module('app.controller')
	.controller('carMg', carMg);
carMg.$inject = [
    'Car',
    'gridOpts',
    'uiGridConstants',
    'dataService',
    'usersService',
    'rockUtil',
    '$scope'
];
function carMg(Car,gridOpts,uiGridConstants,dataService,usersService,rockUtil,$scope) {
    var optData = {};
    $scope.data = {};
    $scope.editObjInfo = editObjInfo;

    $scope.gridOptions = {
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {field: 'objectId', displayName: 'id',width: 120},
            {field: 'phone', displayName: 'phone',width: 120},
            {field: 'title', displayName: 'title',width: 180},
            {field: 'num', displayName: 'num',width: 70},
            {field: 'officialPrice', displayName: 'Price',width: 100,cellFilter: 'bigMoneyFormat'},
            {field: 'discountQuota', displayName: 'discount',width: 100,cellFilter: 'bigMoneyFormat'},
            {field: 'discountRate', displayName: 'discount rate(%)',width: 100},
            {field: 'outsideColor', displayName: 'outside Color',width: 100},
            {field: 'insideColor', displayName: 'inside Color',width: 100},
            {field: 'remark', displayName: 'remark',width: 100}
        ],
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
                var selectRowCount = gridApi.selection.getSelectedRows().length;
                $scope.data.oneRowSelected = false;
                $scope.data.multiRowSelected = false;
                if(selectRowCount === 1){
                    $scope.data.oneRowSelected = true;
                }
                if(selectRowCount > 1){
                    $scope.data.multiRowSelected = true;
                }
            });
            gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
                $scope.data.multiRowSelected = true;
            });
        }
    };
    angular.merge($scope.gridOptions, gridOpts.exportOpts,gridOpts.baseOpts);
	activate();

	function activate() {
        getAllObj();
	}
    function editObjInfo(type){
        var selectedRows = $scope.gridApi.selection.getSelectedRows();
        usersService.getByParams(null,function(data){
            optData.userList = [];
            console.log(data.results);
            angular.forEach(data.results,function(item){
                optData.userList.push({
                    value:item.objectId,
                    name:item.username + ' -- ' + item.mobilePhoneNumber
                });
            });
            rockUtil.openEditModal('editCarModal.html', 'lg',
                type,
                selectedRows,
                optData,
                function(targetEditObject){
                    console.log(targetEditObject);
                    if(type == "edit"){
                        dataService.update(Car.build(targetEditObject),function(data){
                            getAllObj();
                        },function(error){

                        });
                    }else{
                        var preAddCar = Car.build(targetEditObject);
                        dataService.add(preAddCar,function(data){
                            getAllObj();
                        }, function (error) {

                        });
                    }
                });

        });
    };

    function getAllObj(){
        $scope.gridOptions.data = [];
        dataService.getByParams("Car",null,function(data){
            //$scope.gridOptions.data = data.results;
            angular.forEach(data.results,function(car){
                dataService.getById("_User",car.userId,function(data){
                    car.phone = data.mobilePhoneNumber;
                });
                $scope.gridOptions.data.push(car);
            });
        });
    };
};
