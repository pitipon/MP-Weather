const app = getApp()

Page({
  data: {
    showLocation: false,
    longitude: 106.870862,
    latitude: 29.456546,
    scale: 14
  },
  clickWeather: function() {
    wx.redirectTo({
      url: "/pages/weather/index"
    })
  },
  onLoad: function() {
    let myApp = app
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        console.log(res)
        this.setData({
          showLocation: true,
          longitude: res.longitude,
          latitude: res.latitude,
          scale: 16
        })
        myApp.globalData.location = {
          longitude: res.longitude,
          latitude: res.latitude
        }
      }
    })
  }
})
