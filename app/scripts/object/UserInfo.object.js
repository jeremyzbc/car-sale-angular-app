angular.module('app.object')
.factory('UserInfo', function () {
    function UserInfo(objectId,userId,avatar,alias,sexy,city) {
        this.objectId = objectId;
        this.userId = userId;
        this.avatar = avatar || 'images/self/self-avatar.jpeg';
        this.alias = alias;
        this.sexy = sexy;
        this.city = city;
    };
    UserInfo.prototype.className = "UserInfo";
    UserInfo.build = function (data) {
        return new UserInfo(
            data.objectId,
            data.userId,
            data.avatar,
            data.alias,
            data.sexy,
            data.city
        );
    };
    return UserInfo;
});
