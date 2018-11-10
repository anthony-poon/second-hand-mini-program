// pages/product/product.js

const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        sfId: "",
        sfName: "",
        products: []
    },

    getProducts: function () {
        var products = [
            {
                "id": 1,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 2,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 3,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 4,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 5,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 6,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 7,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 8,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 9,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 10,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 11,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 12,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            },
            {
                "id": 13,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": "/images/nothing.png"
            }
        ];

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

        this.getProducts();

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