// pages/product/product.js

import {getProductListByModuleOrStoreId} from "../../mock-data";

const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        sfId: "",
        sfName: "",
        inputShowed: false,
        inputVal: "",
        products: []
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

    getProducts: function (sfId) {
        var products = getProductListByModuleOrStoreId(sfId);

        this.setData({
            products: products
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
            sfId: options.sfId,
            sfName: options.sfName
        });

        this.getProducts(options.sfId);

        console.log("Products: ", this.data.products);
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