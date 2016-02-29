angular.module('app.controller')
	.controller('companyMg', companyMg);
companyMg.$inject = [
    'Company',
    'gridOpts',
    'uiGridConstants',
    'dataService',
    'rockUtil',
    '$scope'
];
function companyMg(Company,gridOpts,uiGridConstants,dataService,rockUtil,$scope) {
    $scope.objName = 'Company';
    $scope.data = {};
    $scope.getAllObj = getAllObj;
    $scope.editObjInfo = editObjInfo;

    $scope.gridOptions = {
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {field: 'objectId', displayName: 'id',width: 120},
            {field: 'name', displayName: 'name',width: 150},
            {field: 'intro', displayName: 'intro',width: 180},
            {field: 'avatar', displayName: 'logo',width: 120},
            {field: 'brands', displayName: 'brands',width: 150},
            {field: 'tel', displayName: 'tel',width: 180},
            {field: 'address', displayName: 'address',width: 180},
            {field: 'remark', displayName: 'remark',width: 300}
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
        rockUtil.openEditModal('editCompanyModal.html', 'lg',
            type,
            selectedRows,
            null,
            function(targetEditObject){
                if(type == "edit"){
                    dataService.update(Company.build(targetEditObject),function(data){
                        getAllObj();
                    },function(error){

                    });
                }else{
                    dataService.add(Company.build(targetEditObject),function(data){
                        getAllObj();
                    }, function (error) {

                    });
                }
            });
    };

    function getAllObj(){
        $scope.gridOptions.data = [];
        dataService.getByParams($scope.objName,null,function(data){
            $scope.gridOptions.data = data.results;
        });
    };

};
