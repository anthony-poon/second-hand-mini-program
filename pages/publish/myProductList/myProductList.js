import {getMyProductListByModuleId} from "../../mock-data";

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

    swiperchange: function(e) {
        //console.log(e.detail.current)
        this.setData({
            swiperCurrent: e.detail.current
        })
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

        console.log('flag before: ', flag);

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

        console.log("flag after: ", flag);

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
            image: '/images/like-solid.png',
            duration: 1000
        });
    },

    openDeleted: function () {
        wx.showToast({
            title: '已删除',
            image: '/images/delete-solid.png',
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
        var products = getMyProductListByModuleId(moduleId);

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