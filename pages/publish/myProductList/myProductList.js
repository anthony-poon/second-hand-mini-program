const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        moduleId: "",
        moduleName: "",
        products: []
    },

    //TODO: actions for hitting edit and traded buttons
    deleteDialog: function (e) {
        let that = this;
        let id = e.currentTarget.dataset.id;
        let name = e.currentTarget.dataset.name;
        console.log("id: ", id);
        wx.showModal({
            title: 'Delete Product',
            content: name,
            confirmText: "Confirm",
            cancelText: "Cancel",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log(that.data.products);
                    //TODO: call DELETE PRODUCT API
                    let newProducts = that.data.products.filter(p => p.id != id);
                    console.log("newProducts: ", newProducts);
                    that.setData({
                        products: newProducts
                    });
                    that.openDeleted();
                    console.log('用户点击主操作')
                } else {
                    console.log('用户点击辅助操作')
                }
            }
        });
        console.log("products: ", this.data.products);
    },

    toggleTraded: function (e) {
        var that = this;
        let id = e.currentTarget.dataset.id;
        let flag = e.currentTarget.dataset.traded;

        // console.log('flag before: ', flag);

        //TODO: call PUT/PATCH API
        let newProducts = that.data.products.map(p => {
            if (p.id == id) {
                p.traded = !p.traded;
                flag = p.traded;
                return p;
            }
            return p;
        });

        that.setData({
            products: newProducts
        });

        // console.log("flag after: ", flag);

        if (flag == true)
            this.openToast();
        else
            this.openCheer();
    },

    openToast: function () {
        wx.showToast({
            title: '卖出去了!',
            icon: 'success',
            duration: 1000,
            success: {  }
        });
    },

    openCheer: function () {
        wx.showToast({
            title: '继续加油!',
            image: '/images/thumbsup.png',
            duration: 1000
        });
    },

    openDeleted: function () {
        wx.showToast({
            title: '已删除',
            image: '/images/delete.svg',
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
            moduleId: options.moduleId,
            moduleName: options.moduleName
        });

        this.getProducts(this.data.moduleId);

        console.log("Products: ", this.data.products);
    },

    getProducts: function (moduleId) {
        var products = [
            {
                "id": 1,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 9999.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 2,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 3,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 4,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 5,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 6,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 7,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 8,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 9,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 10,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 11,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 12,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            },
            {
                "id": 13,
                "name": "iPhone 7 Plus",
                "desc": "Why buy iPhone 8 Plus with same specs?",
                "price": 5000.0,
                "visitCount": 1,
                "img": ["/images/iphone.jpg"],
                "traded": false
            }
        ];

        this.setData({
            products: products
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