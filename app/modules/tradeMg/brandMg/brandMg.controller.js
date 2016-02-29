angular.module('app.controller')
	.controller('brandMg', brandMg);
brandMg.$inject = [
    'Brand',
    'gridOpts',
    'uiGridConstants',
    'dataService',
    'usersService',
    'rockUtil',
    '$scope'
];
function brandMg(Brand,gridOpts,uiGridConstants,dataService,usersService,rockUtil,$scope) {
    var optData = {};
    $scope.data = {};
    $scope.reqParams = {
        limit:200
    }
    $scope.editObjInfo = editObjInfo;
    $scope.saveBrand = saveBrand;

    $scope.gridOptions = {
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {field: 'objectId', displayName: 'id',width: 120},
            {field: 'letter', displayName: 'letter',width: 120},
            {field: 'name', displayName: 'name',width: 180},
            {field: 'avatar', displayName: 'logo',width: 180}
        ],
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
                var selectRowCount = gridApi.selection.getSelectedRows().length;
                $scope.selectBrand = row.entity;

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
    $scope.gridOptions.multiSelect = false;
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
            rockUtil.openEditModal('editBrandModal.html', 'lg',
                type,
                selectedRows,
                optData,
                function(targetEditObject){
                    console.log(targetEditObject);
                    if(type == "edit"){
                        dataService.update(Brand.build(targetEditObject),function(data){
                            getAllObj();
                        },function(error){

                        });
                    }else{
                        var preAddBrand = Brand.build(targetEditObject);
                        dataService.add(preAddBrand,function(data){
                            getAllObj();
                        }, function (error) {

                        });
                    }
                });

        });
    };
    function saveBrand(){
        dataService.update(Brand.build($scope.selectBrand),function(data){
            delete $scope.reqParams.where;
            getAllObj();

        },function(error){

        });
    }

    function getAllObj(){
        dataService.getByParams("Brand",$scope.reqParams,function(data){
            $scope.gridOptions.data = data.results;
        });
    };
    $scope.$watch("data.preBrand",function(newValue){
        if(newValue && newValue.length > 0){
            var name = newValue[0].name;
            $scope.reqParams.where = {
                name:name
            };
            getAllObj();
        }
    });
};
