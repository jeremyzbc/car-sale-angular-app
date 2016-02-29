angular.module('app.controller')
.controller('brandSelectCtrl',brandSelectCtrl);
brandSelectCtrl.$inject = [
    'dataService',
    '$scope'
];
function brandSelectCtrl(dataService,$scope) {
    $scope.selectedBrands = angular.copy($scope.setModel);
    $scope.localLang = {
        selectAll       : "select all",
        selectNone      : "unselect all",
        reset           : "reset",
        search          : "search",
        nothingSelected : "nothing has been selected"         //default-label is deprecated and replaced with this.
    }
    getAllBrand();
    function getAllBrand(){
        dataService.getByParams("Brand",{limit:200},function(data){
            $scope.brandList = data.results;
            if($scope.selectedBrands){
                angular.forEach($scope.brandList,function(brand){
                    angular.forEach($scope.selectedBrands,function(selectBrand){
                        if(brand.name == selectBrand.name ){
                            brand.ticked = true;
                        }
                    });
                });
            }
        });
    }

}
