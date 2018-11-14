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
  }
}
module.exports = {
  formatTime: formatTime,
  server: server
}
