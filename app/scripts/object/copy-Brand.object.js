angular.module('app.object')
    .factory('Brand', function () {
        function Brand(objectId,letter,name,avatar) {
            this.objectId = objectId;

            this.letter = letter;

            this.name = name;

            this.avatar = avatar;
        };
        Brand.prototype.className = "Brand";
        Brand.build = function (data) {
            return new Brand(
                data.objectId,
                data.letter,
                data.name,
                data.avatar
            );
        };
        return Brand;
    });
