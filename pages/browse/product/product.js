import {second_hand_product_details} from "../../mock-data";


const app = getApp();


Page({

    /**
     * Page initial data
     */
    data: {
        productId: "",
        productName: "",
        productDetails: {},
        swiperCurrent: 0
    },

    swiperchange: function(e) {
        //console.log(e.detail.current)
        this.setData({
            swiperCurrent: e.detail.current
        })
    },

    getProductDetails: function () {
        var productDetails = second_hand_product_details;

        this.setData({
            productDetails: productDetails
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
            productId: options.productId,
            productName: options.productName
        });

        this.getProductDetails();

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