// pages/storefront/storefront.js

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
        var storefronts = [
            { "id": 1, "name": "ABC Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 2, "name": "DEF Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 3, "name": "GHI Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 4, "name": "JKL Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 5, "name": "MNO Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 6, "name": "PQR Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 7, "name": "STU Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 8, "name": "VWX Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 9, "name": "YYY Co. Ltd.", "img": "/images/iphone.jpg"},
            { "id": 10, "name": "ZZZ Co. Ltd.", "img": "/images/iphone.jpg"}
        ];

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