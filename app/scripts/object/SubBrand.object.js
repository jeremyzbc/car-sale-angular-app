angular.module('app.object')
    .factory('SubSubBrand', function () {
        function SubSubBrand(objectId,brandId,name) {
            this.objectId = objectId;

            this.brandId = brandId;

            this.name = name;
        };
        SubSubBrand.prototype.className = "SubBrand";
        SubBrand.build = function (data) {
            return new SubBrand(
                data.objectId,
                data.brandId,
                data.name
            );
        };
        return SubBrand;
    });
