// pages/storefront/storefront.js

import {second_hand_module_storefronts} from "../../mock-data";
import { server } from "../../../utils/util.js";
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
    server.getModules(options.moduleId).then((response) => {
      // List of available sf
      var storeFronts = response.data.storeFronts
      console.log(response.data)
      var viewData = {
        moduleId: options.moduleId,
        moduleName: options.moduleName,
        storefronts: []
      }
      storeFronts.forEach((storeFront) => {
        viewData.storefronts.push({
          id: storeFront.id,
          name: storeFront.name,
          img: "/images/iphone_7_plus.jpg"
        })
      });
      this.setData(viewData);
    })
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