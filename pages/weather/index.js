// weather/index.js
const app = getApp()
const myRequest = require('../../lib/api/request');

Page({

  data: {
    
  },

  onLoad: function (options) {
    let that = this
    let latitude = app.globalData.location.latitude
    let longitude = app.globalData.location.longitude
    
    // Get Weather from API
    myRequest.post({
      path: 'weather',
      data: {
        "latitude": latitude,
        "longitude": longitude
      },
      success(res) {
        console.log(33,res)
        that.setData({weather: res.data.weather})
      }
    })

  }
})