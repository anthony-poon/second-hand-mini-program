// pages/main/main.js

const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        cities: [],
        modules: [],
        cityId: 0,
        count: 0,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    bindCityChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            cityId: e.detail.value
        })
    },

    jumpToMyProductList: function (e) {

        console.log(e);
        var moduleId = e.currentTarget.dataset.variable[0];
        url = "/pages/publish/storefront/storefront?moduleId=" + moduleId + "&sellerId=" + globalData.userID;

        console.log(url);

        wx.navigateTo({
            url: url
        })
    },

    // TODO: set selected city to global?
    getCities: function () {
        var citiesData = [
            {"id": 1, "name": "伦敦"},
            {"id": 2, "name": "伯明罕"},
            {"id": 3, "name": "格拉斯哥"},
            {"id": 4, "name": "利物浦"},
            {"id": 5, "name": "布里斯托"},
            {"id": 6, "name": "雪菲尔"},
            {"id": 7, "name": "曼彻斯特"},
            {"id": 8, "name": "里兹"},
            {"id": 9, "name": "爱丁堡"},
            {"id": 10, "name": "莱斯特"},
        ];

        var cities = [];

        citiesData.forEach(function (city) {
            cities.push(city.name);
        });

        this.setData({
            cities: cities
        });

        console.log(cities);
    },

    getUserCityId: function () {
        var cityId = this.data.cityId;
        console.log("City ID: ", cityId)
        return cityId;
    },

    getModules: function (cityId) {
        var modules = [
            {"id": 1, "title": "二手交易", "img": "/images/nothing.png"},
            {"id": 2, "title": "房屋转让", "img": "/images/nothing.png"},
            {"id": 3, "title": "票务转让", "img": "/images/nothing.png"},
            {"id": 4, "title": "......", "img": "/images/nothing.png"},
            {"id": 4, "title": "......", "img": "/images/nothing.png"},
            {"id": 4, "title": "......", "img": "/images/nothing.png"},
        ];
        this.setData({
            modules: modules
        });

        console.log("Modules: ", modules);
    },

    bindGetUserInfo: function (e) {
        console.log("e.detail.userInfo: ", e.detail.userInfo);
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        // TODO: for counting redirect
        var count = 0;
        console.log(++count);

        app.editTabBar();


        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    // Authorized. "getUserInfo" can be directly called to retrieve profile photo/nickname
                    wx.getUserInfo({
                        success: function (res) {
                            console.log("res.userInfo: ", res.userInfo)
                        }
                    })
                }
            }
        });

        console.log("canIUse: ", this.data.canIUse);

        this.getCities();
        var cityId = this.getUserCityId();
        this.getModules(cityId);

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})