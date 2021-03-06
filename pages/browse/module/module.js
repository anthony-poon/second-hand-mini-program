// pages/storefront/storefront.js

import {second_hand_module_storefronts} from "../../mock-data";

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    moduleId: "",
    moduleName: "",
    inputShowed: false,
    inputVal: "",
    storefronts: []
  },

    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },

    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },

    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },

    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },

    getStorefronts: function (moduleId) {
        var storefronts = second_hand_module_storefronts;

        this.setData({
            storefronts: storefronts
        });
    },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

        app.editTabBar();

        console.log(options);

//        wx.showLoading({
//            title: '加载中'
//        });

        this.setData({
            moduleId: options.moduleId,
            moduleName: options.moduleName
        });

        this.getStorefronts(this.data.moduleId);
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