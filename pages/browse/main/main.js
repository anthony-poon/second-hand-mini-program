// pages/main/main.js
import {server} from "../../../utils/util.js";
import {main_cities_data, main_page_modules} from "../../mock-data";

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

    // TODO: set selected city to global?
    getCities: function () {
        var citiesData = main_cities_data;

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
        var modules = main_page_modules;
        this.setData({
            modules: modules
        });

        console.log("Modules: ", modules);
        //TODO: check current module
        // console.log("CAONTAINS:", this.data.modules[0].id.toString().contains('SH'));
    },

    bindGetUserInfo: function (e) {
        console.log("e.detail.userInfo: ", e.detail.userInfo);
    },
    demo: function() {
      // return a promise
      
      server.cities.doRead().then((response) => {
        console.log(response);
      });
      server.modules.doRead().then((response) => {
        console.log(response);
      });
      server.storeFronts.doRead().then((response) => {
        console.log(response);
      });
      // Unsupported yet
      // server.storeItems.doRead().then((response) => {
      //   console.log(response);
      // });
      server.cities.doRead({
        id: 2
      }).then((response) => {
        console.log(response);
      });
      server.modules.doRead({
        id: 2
      }).then((response) => {
        console.log(response);
      });
      server.storeFronts.doRead({
        id: 2
      }).then((response) => {
        console.log(response);
      });
      server.storeItems.doRead({
        "module": 49
      }).then((response) => {
        console.log(response);
      });
    },
    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        // TODO: for counting redirect
        var count = 0;
        console.log(++count);
        this.demo();
        app.editTabBar();


        // wx.getSetting({
        //     success: function (res) {
        //         if (res.authSetting['scope.userInfo']) {
        //             // Authorized. "getUserInfo" can be directly called to retrieve profile photo/nickname
        //             wx.getUserInfo({
        //                 success: function (res) {
        //                     console.log("res.userInfo: ", res.userInfo)
        //                 }
        //             })
        //         }
        //     }
        // });

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