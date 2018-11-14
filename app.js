//app.js

/**
 * TODO LIST
 * - space between products?
 * - templates
 * - separate session for tabs
 * - search bar implementation <-- create cache repo to speed up
 * - sort storefronts in backend before passing back to frontend
 **/

App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo
                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },

    //TODO: implement correct change tab method by keeping alive
    //TODO: Refactor by categorizing pages by tab
    editTabBar: function () {
        var _curPageArr = getCurrentPages();
        var _curPage = _curPageArr[_curPageArr.length - 1];
        var _pagePath = _curPage.__route__;

        if (_pagePath.indexOf('/') != 0) {
            _pagePath = '/' + _pagePath;
        }
        var tabBar = this.globalData.tabBar;

        //TODO: none of the tab bar is active when path is not in tab bar list
        for (var i = 0; i < tabBar.list.length; i++) {
            tabBar.list[i].active = false;
            if (_pagePath.includes(tabBar.list[i].root)) {
                tabBar.list[i].active = true; //根据页面地址设置当前页面状态
            }
        }
        _curPage.setData({
            tabBar: tabBar
        });

        console.log("Tab bars: ", tabBar);
        console.log("Current Pages: ", _curPageArr);

    },
    //TODO: make login user info global?
    globalData: {
        userInfo: null,
        userID: "temp",
        tabBar: {
            color: "#a9b7b7",
            selectedColor: "#ff8124",
            borderStyle: "white",
            list: [{
                selectedIconPath: "/images/ing-active.png",
                iconPath: "/images/ing.png",
                pagePath: "/pages/browse/main/main",
                text: "首页",
                class: "menu-item",
                selected: false,
                root: "/pages/browse/"
            },
                {
                    selectedIconPath: "/images/coming-active.png",
                    iconPath: "/images/coming.png",
                    pagePath: "/pages/publish/main/main",
                    text: "发布",
                    class: "menu-item",
                    selected: false,
                    root: "/pages/publish/"
                },
                {
                    selectedIconPath: "/images/coming-active.png",
                    iconPath: "/images/coming.png",
                    pagePath: "/pages/user/user",
                    text: "我的",
                    class: "menu-item",
                    selected: false,
                    root: "/pages/user/"
                }
            ],
            position: "bottom"
        }
    },
});