angular.module('app.object')
.factory('Order', function () {
    function Order(objectId,sellerId,buyerId,carId,recCity
        ,recStress,buyerName,buyerTel,buyNum,status) {
        this.objectId = objectId;
        this.sellerId = sellerId;
        this.buyerId = buyerId;
        this.carId = carId;
        this.recCity = recCity;
        this.recStress = recStress;
        this.buyerName = buyerName;
        this.buyerTel = buyerTel;
        this.buyNum = buyNum;
        this.status = status;
    };
    Order.prototype.className = "Order";

    Order.build = function (data) {
        return new Order(
            data.objectId,
            data.sellerId,
            data.buyerId,
            data.carId,
            data.recCity,
            data.recStress,
            data.buyerName,
            data.buyerTel,
            data.buyNum,
            data.status
        );
    };
    return Order;
});
