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
    defaultRetry: 5,
    login: function(retry) {
      // Perform 2 promise, pass all response to resolve as array
      if (retry == undefined) {
        retry = this.defaultRetry;
      }
      var p = Promise.all([
          new Promise(function (resolve, reject) {
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
      ]).then((wxData) => {
        // Gather all needed info and login
        return new Promise((resolve, reject) => {
          var code = wxData[0].code;
          var encrypted = wxData[1].encryptedData
          var iv = wxData[1].iv
          wx.request({
            url: server.baseUrl + "/api/security/login",
            method: "POST",
            data: {
              code: code,
              encrypted: encrypted,
              iv: iv
            },
            success: (response) => {
              var loginOK = (response.statusCode == 200)
              if (loginOK) {
                var token = {
                  sessionId: response.data.sessionId,
                  userId: response.data.user.id,
                  nickName: response.data.user.fullName,
                  openId: response.data.user.openId,
                }
                resolve(token)
              } else {
                console.log(retry);
                if (retry <= 0) {
                  // Cannot be chained for some reason. Need to be fixed later
                  reject(response)
                } else {
                  return this.login(retry - 1);
                }
              }
            },
            fail: (response) => {
              throw new Error("Unable to get connect to backend server")
            }
          })
        })
      })
      return p;
    },
    cities: {
      doCreate: (option = {}) => {
        throw new Error("Unsupported method.");
      },
      doRead: (option = {}) => {
        return new Promise((resolve, reject) => {
          var url = server.baseUrl + "/api/cities";
          if (option.id) {
            url = url + "/" + option.id
          }
          wx.request({
            url: url,
            method: "GET",
            success: (response) => {
              if (response.statusCode == 200) {
                resolve(response);
              } else {
                reject(response);
              }
            },
            fail: reject
          })
        });
      },
      doUpdate: (option = {}) => {
        throw new Error("Unsupported method");
      },
      doDelete: (option = {}) => {
        throw new Error("Unsupported method");
      },
    },
    modules: {
      doCreate: (option = {}) => {
        throw new Error("Unsupported method");
      },
      doRead: (option = {}) => {
        return new Promise((resolve, reject) => {
          var url = server.baseUrl + "/api/modules";
          if (option.id) {
            url = url + "/" + option.id
          }
          wx.request({
            url: url,
            method: "GET",
            success: (response) => {
              if (response.statusCode == 200) {
                resolve(response);
              } else {
                reject(response);
              }
            },
            fail: reject
          })
        });
      },
      doUpdate: (option = {}) => {
        throw new Error("Unsupported method");
      },
      doDelete: (option = {}) => {
        throw new Error("Unsupported method");
      },
    },
    storeFronts: {
      doCreate: (option = {}) => {
        throw new Error("Unsupported method");
      },
      doRead: (option = {}) => {
        return new Promise((resolve, reject) => {
          var url = server.baseUrl + "/api/store-fronts";
          if (option.id) {
            url = url + "/" + option.id
          }
          wx.request({
            url: url,
            method: "GET",
            success: (response) => {
              if (response.statusCode == 200) {
                resolve(response);
              } else {
                reject(response);
              }
            },
            fail: reject
          })
        });
      },
      doUpdate: (option = {}) => {
        throw new Error("Unsupported method");
      },
      doDelete: (option = {}) => {
        throw new Error("Unsupported method");
      },
    },
  storeItems: {
    doCreate: (option = {}) => {
      throw new Error("Unsupported method");
    },
    doRead: (option = {}) => {
      return new Promise((resolve, reject) => {
        var url = server.baseUrl + "/api/store-items";
        if (option.id) {
          url = url + "/" + option.id
        }
        if (option.module) {
          url = url + "?module=" + option.module;
        }
        wx.request({
          url: url,
          method: "GET",
          success: (response) => {
            if (response.statusCode == 200) {
              resolve(response);
            } else {
              reject(response);
            }
          },
          fail: reject
        })
      });
    },
    doUpdate: (option = {}) => {
      throw new Error("Unsupported method");
    },
    doDelete: (option = {}) => {
      throw new Error("Unsupported method");
    },
  }
}

module.exports = {
    formatTime: formatTime,
    server: server
}
