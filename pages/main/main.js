// pages/main/main.js

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    cities: [],
    modules: [],
    index: 0,
    count: 0
  },

    bindCityChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
        // TODO: for counting redirect
        var count = 0;
        console.log(++count);

        app.editTabBar();

        // TODO: set selected city to global?
        var cities = ['美国', '中国', '巴西', '日本'];
        var modules = [
                { "id": 1, "title": "二手交易", "img": "../../images/nothing.png"},
                { "id": 2, "title": "房屋转让", "img": "../../images/nothing.png"},
                { "id": 3, "title": "票务转让", "img": "../../images/nothing.png"},
        ];
        this.setData({
            modules: modules,
            cities: cities
        });

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