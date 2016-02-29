angular.module('app.object')
    .factory('Activity', function () {
        function Activity(objectId,title,type,avatar,pubDate,address,detail,remark) {
            this.objectId = objectId;
            this.title = title;
            this.type = type;
            this.avatar = avatar;
            this.pubDate = pubDate;
            this.address = address;
            this.detail = detail;
            this.remark = remark;
        };
        Activity.prototype.className = "Activity";
        Activity.build = function (data) {
            return new Activity(
                data.objectId,
                data.title,
                data.type,
                data.avatar,
                data.pubDate,
                data.address,
                data.detail,
                data.remark
            );
        };
        return Activity;
    });
