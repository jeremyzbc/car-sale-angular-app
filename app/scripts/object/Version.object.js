angular.module('app.object')
    .factory('Version', function () {
        function Version(objectId,name,price,seriesId,outsideImgs,outcolorList,incolorList,configList) {

            this.objectId = objectId;

            this.name = name;

            this.price = price;

            this.outsideImgs = outsideImgs;

            this.seriesId = seriesId;

            this.outcolorList = outcolorList;

            this.incolorList = incolorList;

            this.configList = configList;
        //configList
        // {
        //    [
        //        groupName:"",
        //        groupItem:[
        //                {
        //                    k:"",
        //                    v:""
        //                },{
        //                    k:"",
        //                    v:""
        //                },{
        //                    k:"",
        //                    v:""
        //                }
        //            ]
        //    ]
        // }
        };
        Version.prototype.className = "Version";
        Version.build = function (data) {
            return new Version(
                data.objectId,
                data.name,
                data.price,
                data.seriesId,
                data.outsideImgs,
                data.outcolorList,
                data.incolorList,
                data.configList
            );
        };
        return Version;
    });
