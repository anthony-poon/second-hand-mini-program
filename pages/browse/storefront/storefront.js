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
          var itemType = storeItem.itemType
          switch (itemType) {
            case "SecondHandItem":
              viewData.products.push({
                id: storeItem.id,
                template: "second-hand",
                title: storeItem.name,
                desc: storeItem.description,
                visitorCount: storeItem.visitorCount,
                price: storeItem.price,
                img: storeItem.assets,
                traded: false
              })
              break;
            case "HousingItem":
              viewData.products.push({
                id: storeItem.id,
                template: "housing",
                title: storeItem.name,
                desc: storeItem.description,
                visitorCount: storeItem.visitorCount,
                price: storeItem.price,
                img: storeItem.assets,
                traded: false,
                location: storeItem.location,
                propertyType: storeItem.propertyType,
                duration: storeItem.durationDay
              })
              break;
            case "TicketingItem":
              viewData.products.push({
                id: storeItem.id,
                template: "ticketing",
                title: storeItem.name,
                desc: storeItem.description,
                visitorCount: storeItem.visitorCount,
                price: storeItem.price,
                img: storeItem.assets,
                traded: false,
                validTill: storeItem.validTill,
              })
              break;
          }
        });
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