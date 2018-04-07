// pages/detail/detail.js

const articleInfo = {
  title: '特斯拉卡车发布',
  category: '科技',
  poster: 'https://tse2-mm.cn.bing.net/th?id=OIP.EjLyH7p1pO0hdR9mufBjbQHaFM&p=0&o=5&pid=1.1',
  content: '作为智能、先进的电动汽车的代表，Tesla一直以诸多领先业界的革命性技术，为车主带来独一无二的驾乘体验。在享受最新科技带来的新鲜与愉悦的同时，可能您不免有时对于这样一部功能丰富的车辆，难以物尽其用。同时，由于OTA空中升级可以不断地为您的爱车增添诸如自动辅助驾驶、召唤等新功能和特性，您或许需要一个机会，去更了解您不断进化中的Tesla - Tesla车主讲堂因此为您而设。通过讲堂活动，您将了解Tesla的前沿科技功能，以及一些特别的日常用车技巧。此外，更可以和众多Tesla车友畅快交流，一起体验科技带来的愉悦。我们诚邀您出席，共同领略未来科技之美。点击下方您所在的城市，填写报名信息；名额有限，我们期待您的光临。',
  created_at: '2017-11-11'
}

Page({

  onShareAppMessage: function (options) {
    return {
      title: '标题',
      path: '/page/user?id=123',
      success: function () {
        // 转发成功
        console.log(`share by: ${options.from}`)
      },
      fail: function () {
        // 转发失败
      }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.getArticle(option.id)
  },

  getArticle: function(id) {
    this.setData({article: articleInfo})
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