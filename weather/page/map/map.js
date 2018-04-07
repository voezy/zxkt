// page/map/map.js
const locData = require('./loc.js')

var markers = locData.map(loc => {
  let latlng = loc.latlng.split(',')

  return {
    id: loc.name,
    latitude: parseFloat(latlng[1]), // 经纬度信息需要转换成数值型
    longitude: parseFloat(latlng[0]),// 经纬度信息需要转换成数值型
    name: loc.name,
    iconPath: '/image/location.png'
  }
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: markers[0].latitude,
    longitude: markers[0].longitude,
    markers: markers,
  },

  switchCity: function (e) {
    let app = getApp()
    app.globalData.currentCity = e.markerId
    console.log('\n点击的城市名称: ' + e.markerId + ', 全局城市：' + app.globalData.currentCity + '\n--------')
    wx.switchTab({
      url: '/page/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})