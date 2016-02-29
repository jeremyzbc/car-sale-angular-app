angular.module('app.object')
    .factory('Brand', function () {
        function Brand(objectId,letter,py,name,avatar) {
            this.objectId = objectId;

            this.letter = letter;
            this.py = py;

            this.name = name;

            this.avatar = avatar;
        };
        Brand.prototype.className = "Brand";
        Brand.build = function (data) {
            return new Brand(
                data.objectId,
                data.letter,
                data.py,
                data.name,
                data.avatar
            );
        };
        return Brand;
    });
