angular.module('app.object')
    .factory('ActivityType', function () {
        function ActivityType(objectId,name) {
            this.objectId = objectId;
            this.name = name;
        };
        ActivityType.prototype.className = "ActivityType";
        ActivityType.build = function (data) {
            return new ActivityType(
                data.objectId,
                data.name
            );
        };
        return ActivityType;
    });
