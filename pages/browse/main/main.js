// pages/main/main.js

import {main_cities_data, main_page_modules} from "../../mock-data";
import {server} from "../../../utils/util.js";
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

    //TODO: slow response time than built-in navigator due to having to pass params
    jumpToModule: function (e) {

        console.log(e);
        var item = e.currentTarget.dataset.variable;
        var id = item[0];
        var title = item[1];
        var url = "";
        if (id != 4) {
            url = "/pages/browse/module/module?id=" + id + "&moduleName=" + title;
        } else {
            url = "/pages/coming/coming";
        }

        console.log(url);


        wx.navigateTo({
            url: url
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

    getModules: function (cityId) {
        var modules = main_page_modules;
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
      server.getCities().then((response) => {
        // Get all available cities
        var cities = response.data.cities;
        // Default current cities as first in array
        var currCity = cities[0].id
        // Get module list of specific cities
        server.getCities(currCity).then((response) => {
          var modules = response.data.modules;
          // Reformat backend data to view data
          var viewData = {
            cities: [],
            modules: []
          };
          cities.forEach((city) => {
            console.log(city)
            viewData.cities.push(city.name);
          })
          modules.forEach((moduleObj) => {
            viewData.modules.push({
              id: moduleObj.id,
              title: moduleObj.name,
              sf: true,
              img: "/images/nothing.png"
            })
          })
          this.setData(viewData)
        });
      }).catch(function (response) {
        console.log(response);
      })
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