// pages/product/product.js

const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        productId: "",
        productDetails: {},
        wordCount: 0
    },

    getProductDetails: function () {
        var productDetails =
            {
                "id": 1,
                "title": {
                    "label": "商品",
                    "value": "iPhone 7 Plus"
                },
                "desc": {
                    "label": "描述",
                    "value": "Why buy iPhone 8 Plus with same specs?"
                },
                "price": {
                    "label": "金额",
                    "value": "5000.0"
                },
                "attr": [
                    {
                        "label": "浏览量",
                        "type": "NUMBER",
                        "editable": false,
                        "value": "1231"
                    }
                ],
                "img": ["/images/emma.jpg", "/images/emma.jpg"]
            }

        // {
        //     "id": 1,
        //     "name": "iPhone 7 Plus",
        //     "desc": "Why buy iPhone 8 Plus with same specs?",
        //     "price": 5000.0,
        //     "visitCount": 1231,
        //     "img": [
        //         "/images/emma.jpg"
        //     ]
        // }

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
    },

    cancelEdit: function (e) {
        wx.navigateBack({
            delta: 1
        });
    },

    descChange: function (e) {

        this.setData({
            wordCount: e.detail.value.length
        });

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