// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMedicalCard: false,
    bloodTypes: ['A', 'B', 'AB', 'O', 'RH+', 'RH-', 'Hh/孟买血型', '亚孟买血型', 'P血型'],
    index: 0,
    medicalConditions: [
      { name: '有过敏史', checked: false },
      { name: '有过大型手术', checked: false },
      { name: '有家族遗传病', checked: false }
    ],
    phoneNumber: '',
    isShowUpdate: false,
    form: null,
  },

  showMedicalCard: function() {
    this.setData({
      isShowMedicalCard: true
    })
  },

  bloodTypeChange: function(e){
    let value = e.detail.value
    this.setData({
      index: value,
    })
  },

  phoneNumberChange: function(e) {
    let phone = e.detail.value
    this.setData({
      phoneNumber: phone
    })
  },

  makePhoneCall: function() {
    let {phoneNumber} = this.data
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  },

  formSubmit: function(e) {
    let data = e.detail.value
    //console.log('将要存储的数据: ' + JSON.stringify(data))

    if(this.data.form == null) {
      console.log('本地无数据, 正在写入数据')
      wx.setStorageSync('cureCardData', data)
      console.log('存储本地医疗卡数据成功\n--------')
      wx.showToast({
        title: '提交成功',
      })

      this.setData({
        form: data,
        isShowUpdate: true,
      })
    } else {
      console.log('本地存在数据, 正在更新数据')
      wx.setStorageSync('cureCardData', data)
      console.log('更新本地医疗卡数据成功\n--------')
      wx.showToast({
        title: '更新成功',
      })

      this.setData({
        form: data,
        isShowUpdate: true,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('(onLoad)\n')
    // wx.setStorageSync('cureCardData', '')// 清空数据
    let localForm = wx.getStorageSync('cureCardData')
    if (localForm != '') {
      console.log('存在数据，获取本地医疗卡数据成功\n--------')

      let localMedicalConditions = localForm.medicalConditions
      let medicalConditions = this.data.medicalConditions
      for (let i = 0; i < medicalConditions.length; i++) {
        if (localMedicalConditions.includes(medicalConditions[i].name)) {
          medicalConditions[i].checked = true
        }
      }

      this.setData({
        form: localForm,
        isShowUpdate: true,
        isShowMedicalCard: true,
        medicalConditions: medicalConditions,
      })
      //console.log('获取到的本地数据: ' + JSON.stringify(this.data.form) + '\n--------')
    } else {
      console.log('无本地医疗卡数据或者获取本地数据失败\n--------')
    }
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