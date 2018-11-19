// pages/product/product.js

import {getMyProductDetailsByProductId} from "../../mock-data";

const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        productId: "",
        productDetails: {},
        wordCount: 0,
        requestDto: {}
    },

    getMyProductDetails: function (productId) {
        var productDetails = getMyProductDetailsByProductId(productId);

        console.log(productDetails);

        this.setData({
            productDetails: productDetails,
            wordCount: productDetails.desc.value.length
        });
    },

    confirmEdit: function (e) {
        let that = this;
        wx.navigateBack({
            delta: 1,
            success: that.toastOnUpdateSuccess
        });
        console.log(this.data.requestDto);
    },

    cancelEdit: function (e) {
        wx.navigateBack({
            delta: 1
        });
    },

    titleChange: function (e) {

        this.setData({
            "requestDto.title": e.detail.value
        });
    },

    descChange: function (e) {

        this.setData({
            wordCount: e.detail.value.length,
            "requestDto.desc": e.detail.value
        });
    },

    priceChange: function (e) {

        this.setData({
            "requestDto.price": e.detail.value
        });
    },

    inputChange: function(e) {
        console.log(e);
    },

    toastOnUpdateSuccess: function() {
        wx.showToast({
            title: '修改成功!',
            icon: 'success',
            duration: 1000
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
            productId: options.productId
        });

        this.getMyProductDetails(options.productId);

        console.log("Product Details: ", this.data.productDetails);
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