// pages/product/product.js

import {getProductListByModuleOrStoreId} from "../../mock-data";
import { server } from "../../../utils/util.js";
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
      server.getStoreFronts(options.sfId).then((response) => {
        var storeItems = response.data.storeItems;
        console.log(response.data)
        var viewData = {
          sfId: options.sfId,
          sfName: options.sfName,
          products: []
        }
        storeItems.forEach((storeItem) => {
          storeItem.assets
          viewData.products.push({
            id: storeItem.id,
            title: {
              label: "商品",
              value: storeItem.name
            },
            desc: {
              label: "描述",
              value: storeItem.description
            },
            attr: [
              {
                "editable": false,
                "label": "浏览量",
                "type": "NUMBER",
                "value": 12345
              }
            ],
            price: {
              "label": "金额",
              "value": "5000"
            },
            visitCount: 1234,
            // Assuming it is an array
            img: storeItem.assets,
            traded: false
          })
        })
        console.log(viewData);
        this.setData(viewData);
      });
      console.log(getProductListByModuleOrStoreId("SF_0001"))

      //this.getProducts(options.sfId);

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