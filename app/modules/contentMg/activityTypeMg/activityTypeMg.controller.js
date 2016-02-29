angular.module('app.controller')
	.controller('activityTypeMg', activityTypeMg);
activityTypeMg.$inject = [
    'ActivityType',
    'gridOpts',
    'uiGridConstants',
    'dataService',
    'rockUtil',
    '$scope'
];
function activityTypeMg(ActivityType,gridOpts,uiGridConstants,dataService,rockUtil,$scope) {
    $scope.objName = 'ActivityType';

    $scope.data = {};
    $scope.getAllObj = getAllObj;
    $scope.editObjInfo = editObjInfo;

    $scope.gridOptions = {
        enableHorizontalScrollbar:uiGridConstants.scrollbars.ALWAYS,
        columnDefs: [
            {field: 'objectId', displayName: 'objectId',width: 200},
            {field: 'name', displayName: 'name',width: 200}
        ],
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
                var selectRowCount = gridApi.selection.getSelectedRows().length;
                $scope.data.oneRowSelected = false;
                $scope.data.multiRowSelected = false;
                if(selectRowCount === 1){
                    $scope.data.oneRowSelected = true;
                    console.log(row.entity);
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
        rockUtil.openEditModal('editActivityTypeModal.html', 'lg',
            type,
            selectedRows,
            null,
            function(targetEditObject){
                console.log(targetEditObject);
                if(type == "edit"){
                    dataService.update(ActivityType.build(targetEditObject),function(data){
                        getAllObj();
                    },function(error){

                    });
                }else{
                    dataService.add(ActivityType.build(targetEditObject),function(data){
                        getAllObj();
                    }, function (error) {

                    });
                }
            });
    };

    function getAllObj(){
        dataService.getByParams($scope.objName,null,function(data){
            $scope.gridOptions.data = data.results;
        });
    };
};
