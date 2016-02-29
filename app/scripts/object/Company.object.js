angular.module('app.object')
    .factory('Company', function () {
        function Company(objectId,name,avatar,brands,tel,address,intro,remark) {
            this.objectId = objectId;
            this.name = name;
            this.avatar = avatar;
            this.brands = brands;
            this.tel = tel;
            this.address = address;
            this.intro = intro;
            this.remark = remark;
        };
        Company.prototype.className = "Company";
        Company.build = function (data) {
            return new Company(
                data.objectId,
                data.name,
                data.avatar,
                data.brands,
                data.tel,
                data.address,
                data.intro,
                data.remark
            );
        };
        return Company;
    });
