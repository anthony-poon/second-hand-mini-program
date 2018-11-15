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
  }
}

module.exports = {
  formatTime: formatTime,
  server: server
}
