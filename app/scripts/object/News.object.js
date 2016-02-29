angular.module('app.object')
    .factory('News', function () {
        function News(objectId,title,type,avatar,pubDate,detail,isBanner) {
            this.objectId = objectId;
            this.title = title;
            this.type = type;
            this.avatar = avatar;
            this.pubDate = pubDate;
            this.detail = detail;
            this.isBanner = isBanner;
        };
        News.prototype.className = "News";
        News.build = function (data) {
            return new News(
                data.objectId,
                data.title,
                data.type,
                data.avatar,
                data.pubDate,
                data.detail,
                data.isBanner
            );
        };
        return News;
    });
