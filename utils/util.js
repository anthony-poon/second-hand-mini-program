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
    baseUrl: "http://localhost:8000",
    // return a promise
    defaultRetry: 5,
    _getWxData: () => {
      // Perform 2 promise, pass all response to resolve as array
      return Promise.all([
        new Promise(function (resolve, reject) {
          wx.login({
            success: (response) => {
              resolve(response.code)
            },
            fail: reject
          })
        }),
        new Promise(function (resolve, reject) {
          wx.getUserInfo({
            withCredentials: true,
            success: (response) => {
              resolve({
                encrypted: response.encryptedData,
                iv: response.iv
              })
            },
            fail: reject
          })
        })
      ])
    },
    login: function(retry) {
      if (retry == undefined) {
        retry = this.defaultRetry;
      }
      return server._getWxData().then((wxData) => {
        // Gather all needed info and login
        return new Promise((resolve, reject) => {
          wx.request({
            url: server.baseUrl + "/api/security/login",
            method: "POST",
            data: {
              code: wxData[0],
              encrypted: wxData[1].encrypted,
              iv: wxData[1].iv
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
                  this.login(retry - 1).then(resolve);
                }
              }
            },
            fail: (response) => {
              throw new Error("Unable to get connect to backend server")
            }
          })
        })
      })
    },
    mockLogin: function (mockOpenId, retry) {
      if (retry == undefined) {
        retry = this.defaultRetry;
      }
      return server._getWxData().then((wxData) => {
        // Gather all needed info and login
        return new Promise((resolve, reject) => {
          wx.request({
            url: server.baseUrl + "/api/security/login",
            method: "POST",
            header: {
              Authorization: mockOpenId,
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
                  this.login(retry - 1).then(resolve);
                }
              }
            },
            fail: (response) => {
              throw new Error("Unable to get connect to backend server")
            }
          })
        })
      })
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
      return new Promise((resolve, reject) => {
        if (!option.sessionId) {
          throw new Error("Missing Session Id");
        }
        if (!option.data) {
          throw new Error("Missing Data Object");
        }
        if (!option.moduleId && !option.storeFrontId) {
          throw new Error("Missing module Id or store front Id")
        }
        var id = option.storeFrontId || option.moduleId
        wx.request({
          url: server.baseUrl + "/api/personal/store-items?id=" + id,
          method: "POST",
          header: {
            "Cookie": "PHPSESSID="+option.sessionId,
          },
          data: option.data,
          success: (response) => {
            if (200 == response.statusCode) {
              resolve(response)
            } else {
              reject(response)
            }
          },
          fail: reject
        })
      })
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
    assets: {
      doCreate: (option = {}) => {
        if (!option.sessionId) {
          throw new Error("Missing Session Id");
        }
        if (!option.images) {
          throw new Error("Missing Data Object");
        }
        if (!option.storeItemId) {
          throw new Error("Missing store item Id")
        }
        if (option.images) {
          var upload = (path) => {
            return new Promise((res, rej) => {
              wx.uploadFile({
                url: server.baseUrl + '/api/personal/store-items/' + option.storeItemId + "/assets",
                filePath: path,
                name: 'image.png',
                header: {
                  "Cookie": "PHPSESSID=" + option.sessionId,
                },
                success: (response) => {
                  if (200 == response.statusCode) {
                    res(response);
                  } else {
                    rej(response);
                  }
                },
                fail: rej
              })
            });
          }
          var promises = [];
          option.images.forEach((imagePath) => {
            promises.push(upload(imagePath));
          })
          return Promise.all(promises).then((response) => {
            resolve(response)
          });
        }
      }
    }
  }
}

module.exports = {
    formatTime: formatTime,
    server: server
}
