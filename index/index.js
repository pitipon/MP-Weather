const app = getApp()

Page({
  data: {
    showLocation: false,
    longitude: 106.870862,
    latitude: 29.456546,
    scale: 14
  },
  locateMe () {
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
      }
    })
  }
})
