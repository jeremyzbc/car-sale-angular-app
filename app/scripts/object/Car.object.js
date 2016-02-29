angular.module('app.object')
    .factory('Car', function () {
        function Car(objectId,userId,title,brandId,brandName,subBrandId,subBrandName,
                     seriesId,seriesName,versionName,num,officialPrice,realPrice,
                     discountQuota,discountRate,outsideColor,insideColor,
                     city,isDiscount,isOnRoad,delayDay,remark,location,status) {
            this.objectId = objectId;
            this.userId = userId;
            this.title = title;
            this.brandId = brandId;
            this.brandName = brandName;
            this.subBrandId = subBrandId;
            this.subBrandName = subBrandName;
            this.seriesId = seriesId;
            this.seriesName = seriesName;
            this.versionName = versionName;
            this.num = num;
            this.officialPrice = officialPrice;
            this.realPrice = realPrice;
            this.discountQuota = discountQuota;
            this.discountRate = discountRate;
            this.outsideColor = outsideColor;
            this.insideColor = insideColor;
            this.city = city;
            this.isDiscount = isDiscount || false;
            this.isOnRoad = isOnRoad || false;
            this.delayDay = delayDay;
            this.remark = remark;
            this.location = location;
            this.status = status;
        };
        Car.prototype.className = "Car";
        Car.build = function (data) {
            return new Car(
                data.objectId,
                data.userId,
                data.title,
                data.brandId,
                data.brandName,
                data.subBrandId,
                data.subBrandName,
                data.seriesId,
                data.seriesName,
                data.versionName,
                data.num,
                data.officialPrice,
                data.realPrice,
                data.discountQuota,
                data.discountRate,
                data.outsideColor,
                data.insideColor,
                data.city,
                data.isDiscount,
                data.isOnRoad,
                data.delayDay,
                data.remark,
                data.location,
                data.status
            );
        };
        return Car;
    });
