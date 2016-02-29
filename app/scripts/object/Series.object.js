angular.module('app.object')
    .factory('Series', function () {
        function Series(objectId,brandId,subBrandId,name,versionList,flag) {
            this.objectId = objectId;
            this.brandId = brandId;
            this.subBrandId = subBrandId;
            this.name = name;
            this.versionList = versionList;
            this.flag = flag || 0;
        };
        Series.prototype.className = "Series";
        Series.build = function (data) {
            return new Series(
                data.objectId,
                data.brandId,
                data.subBrandId,
                data.name,
                data.versionList,
                data.flag
            );
        };
        return Series;
    });
