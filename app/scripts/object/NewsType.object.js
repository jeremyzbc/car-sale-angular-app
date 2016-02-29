angular.module('app.object')
    .factory('NewsType', function () {
        function NewsType(objectId,name) {
            this.objectId = objectId;
            this.name = name;
        };
        NewsType.prototype.className = "NewsType";
        NewsType.build = function (data) {
            return new NewsType(
                data.objectId,
                data.name
            );
        };
        return NewsType;
    });
