angular.module('app.controller')
	.controller('userInfoMg', userInfoMg);
userInfoMg.$inject = [
    'UserInfo',
    'dataService',
    'gridOpts',
    'uiGridConstants',
    'rockUtil',
    '$scope'
];
function userInfoMg(UserInfo,dataService,gridOpts,uiGridConstants,rockUtil,$scope) {
    var modalObject = {};
    modalObject.sexy=  [{
        value:0
    },{
        value:1
    }];
    $scope.editUserInfo = editUserInfo;
    $scope.getAllUserInfo = getAllUserInfo;
    $scope.data = {};
    $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
        //if(col.filters[0].term){
        //    return 'header-filtered';
        //} else {
        //    return '';
        //}
    };
    $scope.gridOptions = {
        enableFiltering: true,
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {field: 'objectId', displayName: 'id',width: 120},
            {field: 'alias', displayName: 'alias',width: 200 },
            {field: 'phone', displayName: 'phone',width: 150},
            {field: 'sexy', displayName: 'sexy',width: 100,cellFilter: 'sexyText'},
            {field: 'city', displayName: 'city',width: 150}
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
    ////////////////
    function activate() {
        getAllUserInfo();
    }
    function editUserInfo(type){
        var selectedRows = $scope.gridApi.selection.getSelectedRows();
        rockUtil.openEditModal(selectedRows,type,'editUserInfoModal.html',successCall(),modalObject);
        function successCall(){
            return function(targetEditObject){
                if(type == "edit"){
                    dataService.update(UserInfo.build(targetEditObject),function(data){
                        getAllUserInfo();
                    },function(error){

                    });
                }else{
                    dataService.add(UserInfo.build(targetEditObject),function(data){
                        getAllUserInfo();
                    }, function (error) {

                    });
                }
            }
        }
    };

    function getAllUserInfo(){
        $scope.gridOptions.data = [];
        dataService.getByParams("UserInfo",null,function(data){

            angular.forEach(data.results,function(user){
                dataService.getById("_User",user.userId,function(data){
                    user.phone = data.mobilePhoneNumber;
                });
                $scope.gridOptions.data.push(user);
            });
        });
    };
};
