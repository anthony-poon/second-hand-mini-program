const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const server = {
  baseUrl: "http://wechat.anthonypoon.net",
  // return a promise
  login: () => {
    // Perform 2 promise, pass all response to resolve as array
    var p = Promise.all([
      new Promise(function(resolve, reject){
        wx.login({
          success: resolve,
          fail: reject
        })
      }),
      new Promise(function (resolve, reject) {
        wx.getUserInfo({
          withCredentials: true,
          success: resolve,
          fail: reject
        })
      })
    ]).then((responses) => {
      // Gather all needed info and login
      var code = responses[0].code;
      var encrypted = responses[1].encryptedData
      var iv = responses[1].iv
      wx.request({
        url: server.baseUrl + "/api/security/login",
        method: "POST",
        data: {
          code: code,
          encrypted: encrypted,
          iv: iv
        }
      })
    }).catch((response) => {
      console.log(response);
    });
    return p;
  },
  getCities: function (id) {
    var p = new Promise((resolve, reject) => {
      var url = this.baseUrl + "/api/cities";
      if (id) {
        url = url + "/" + id
      }
      wx.request({
        url: url,
        method: "GET",
        success: resolve,
        fail: reject
      })
    });
    return p;
  },
  getModules: function (id) {
    var p = new Promise((resolve, reject) => {
      var url = this.baseUrl + "/api/modules";
      if (id) {
        url = url + "/" + id
      }
      wx.request({
        url: url,
        method: "GET",
        success: resolve,
        fail: reject
      })
    });
    return p;
  },
  getStoreFronts: function (id) {
    var p = new Promise((resolve, reject) => {
      var url = this.baseUrl + "/api/store-fronts";
      if (id) {
        url = url + "/" + id
      }
      wx.request({
        url: url,
        method: "GET",
        success: resolve,
        fail: reject
      })
    });
    return p;
  },
  postStoreItems: function (json, id, openId) {
    var p = new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + "/api/personal/store-items?id=" + id,
        method: "POST",
        header: {
          "Authorization": openId
        },
        data:  json,
        success: resolve,
        fail: reject
      })
    })
    return p;
  },
  mockLogin: function(openId) {
    var p = new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + "/api/security/login",
        method: "POST",
        header: {
          "Authorization": openId
        },
        success: resolve,
        fail: reject
      })
    })
    return p;
  }
}

module.exports = {
  formatTime: formatTime,
  server: server
}
