angular.module('app.controller')
	.controller('activityMg', activityMg);
activityMg.$inject = [
    'Activity',
    'gridOpts',
    'uiGridConstants',
    'dataService',
    'rockUtil',
    '$scope'
];
function activityMg(Activity,gridOpts,uiGridConstants,dataService,rockUtil,$scope) {
    $scope.objName = 'Activity';
    $scope.data = {};
    $scope.getAllObj = getAllObj;
    $scope.editObjInfo = editObjInfo;

    $scope.gridOptions = {
        enableHorizontalScrollbar:uiGridConstants.scrollbars.ALWAYS,
        columnDefs: [
            {field: 'objectId', displayName: 'id',width: 120},
            {field: 'title', displayName: 'title',width: 250},
            {field: 'typeName', displayName: 'typeName',width: 100},
            {field: 'avatar', displayName: 'avatar',width: 120},
            {field: 'pubDate', displayName: 'pubDate',width: 180},
            {field: 'address', displayName: 'address',width: 180},
            {field: 'remark', displayName: 'remark',width: 180},
            {field: 'detail', displayName: 'detail',width: 300}
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
        rockUtil.openEditModal('editActivityModal.html', 'lg',
            type,
            selectedRows,
            null,
            function(targetEditObject){
                if(type == "edit"){
                    dataService.update(Activity.build(targetEditObject),function(data){
                        getAllObj();
                    },function(error){

                    });
                }else{
                    dataService.add(Activity.build(targetEditObject),function(data){
                        getAllObj();
                    }, function (error) {

                    });
                }
            });
    };

    function getAllObj(){
        $scope.gridOptions.data = [];
        dataService.getByParams($scope.objName,null,function(data){
            angular.forEach(data.results,function(activity){
                dataService.getById("ActivityType",activity.type,function(data){
                    activity.typeName = data.name;
                });
                $scope.gridOptions.data.push(activity);
            });
        });
    };

};
