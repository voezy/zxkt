// page/index/index.js
// 引入SDK核心类
var QQMapWX = require('./qqmap-wx-jssdk.min');
var key = require('./key')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasLocation: false,
    location: { longitude: 113.26436, latitude: 23.12908},
    city: '',
    weather: '',
    temperature: '',
    weatherCode: '',
    weatherImg: ''
  },

  locate: function () {
    let that = this
    wx.getLocation({
      success: function (res) {
        //console.log(res)
        that.setData({
          hasLocation: true,
          // location: formatLocation(res.longitude, res.latitude)
          location: { longitude: res.longitude, latitude: res.latitude }
        })
        //console.log('有位置： ' + that.data.hasLocation)
        console.log('\n(locate)\n从定位获得经纬度： ' + that.data.location.longitude + ', ' + that.data.location.latitude)
        console.log('-----------')

        // 获得用户经纬度之后，利用经纬度来获得该城市名称
        that.getCity()
      }
    })
  },
  
  getCity: function() {
    let that = this
    // 实例化API核心类
    let demo = new QQMapWX({
      key: key.tencentMap // 必填
    });
    demo.reverseGeocoder({
      location: that.data.location,
      success: function (res) {
        let city = res.result.address_component.city;
        let app = getApp()

        that.setData({
          city: city
        })

        app.globalData.currentCity = city

        // console.log('reverseGeo success: ' + JSON.stringify(res));
        console.log('\n(getCity)\n从定位获得本市名称: ' + that.data.city)
        console.log('-----------')

        // 确定城市之后，利用城市名字和心知天气api来获得该城市天气
        that.getWeather()
      },
      fail: function (res) {
        console.log('reverseGeo fail，获取城市名失败，请检查腾讯地图开发者秘钥和网络等情况: ' + res);
      },
      complete: function (res) {
        //console.log('reverseGeo complete.');
      }
    });
  },

  getWeather: function () {
    let that = this
    // 构造最终请求的 url
    console.log('\n(getWeather)\n将要获取这个城市的天气: ' + that.data.city)
    let url = 'https://api.seniverse.com/v3/weather/now.json?key=' + key.seniverse + '&location=' + encodeURIComponent(that.data.city) + '&language=zh-Hans&unit=c';
    console.log('心知url: ' + url)

    wx.request({
      url: url,
      success: function (result) {
        //console.log('天气结果: ' + JSON.stringify(result))
        
        let weather = result.data.results[0].now.text
        let temperature = result.data.results[0].now.temperature
        let weatherCode = result.data.results[0].now.code
        console.log('获取天气结果: ' + that.data.city + ', ' + weather + ', ' + temperature + '度, ' + '天气代码: ' +  weatherCode + '\n--------')
        that.setData({
          weather: weather,
          temperature: temperature,
          weatherCode: weatherCode,
          weatherImg: 'https://s1.sencdn.com/web/icons/3d_50/' + weatherCode + '.png'
        })
        
      },
      fail: function ({ errMsg }) {
        console.log('getWeather errMsg: ' + errMsg)
      }
    })
  },

  reloadData: function() {
    let that = this
    let app = getApp()

    that.setData({
      city: app.globalData.currentCity,
    })
    that.getWeather()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.locate()
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
    let app = getApp()

    console.log('\n(onShow)\n全局城市: ' + app.globalData.currentCity + ', 上一次获取的城市: ' + this.data.city)
    if (app.globalData.currentCity == null) {
      console.log('第一次加载程序，从定位获取城市和天气\n--------')
    } else {
      console.log('正获取天气数据\n--------')
      this.reloadData()
    }
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