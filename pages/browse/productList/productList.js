// pages/product/product.js

import {getProductListByModuleOrStoreId} from "../../mock-data";

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

    getProducts: function (moduleId) {
        var products = getProductListByModuleOrStoreId(moduleId);

        this.setData({
            products: products
        });
    },

    copyToClipboard: function(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.wechatid,
            success(res) {
                wx.getClipboardData({
                    success(res) {
                        console.log(res.data);
                    }
                });
            }
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

        this.getProducts(options.moduleId);

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