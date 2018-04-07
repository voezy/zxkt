// pages/index.js
const firstPage = [
  {
    id: '1',
    title: '装修秘诀',
    description: '文艺气息爆棚的精致白色现代家',
    cover: 'https://tse3-mm.cn.bing.net/th?id=OIP.yMkWcyJp_U4XlLej1XTbUgHaF3&p=0&o=5&pid=1.1'
  },
  {
    id: '2',
    title: '咖啡指南',
    description: '咖啡制作终极指南',
    cover: 'https://tse3-mm.cn.bing.net/th?id=OIP._krCsLO2cCdCLKH4yirvVwHaFi&p=0&o=5&pid=1.1'
  },
  {
    id: '3',
    title: '世界自闭症日',
    description: '今天是世界自闭症日',
    cover: 'https://tse2-mm.cn.bing.net/th?id=OIP.I9_gY98zLeHLD3RBaE755AHaFH&p=0&o=5&pid=1.1'
  },
  {
    id: '4',
    title: '霍金逝世',
    description: '著名物理学家霍金今日去世',
    cover: 'https://img1.12580.tv/wwwart/201803/21/125900du0nn280vncjrc8j.jpeg'
  }
]

const lastPage = [
  {
    id: '5',
    title: '超新约全书',
    description: '一个以折磨人为乐趣的上帝',
    cover: 'https://tse4-mm.cn.bing.net/th?id=OIP.D-hJmG0XSQ7Y5hVlLp0qWwAAAA&p=0&o=5&pid=1.1'
  }, {
    id: '6',
    title: '2001 太空漫游 2001',
    description: '现代科幻电影技术的里程碑',
    cover: 'https://tse4-mm.cn.bing.net/th?id=OIP.4zfRkiiOa3iZtmR0kVeTMgHaLH&p=0&o=5&pid=1.1'
  }
]

let isEnd = false
const pageLimit = 4
let oldArticles = []

Page({
  data: {
    articles: [],
    loading: false,
    loadMoreText: '加载更多'
  },

  onLoad: function () {
    this.getArticles(true)
  },

  loadMore: function(event) {
    this.getArticles()
  },

  getArticles: function (isFirstPage) {
    if (!isEnd && !this.data.loading) {
      this.setData({ loading: true })
      setTimeout( () => {
        if (isFirstPage) {
          oldArticles = Object.assign(this.addReadStatus(firstPage))
          this.setData({
            articles: oldArticles,
            loading: false
          })
        } else {
          this.setData({
            articles: oldArticles.concat(this.addReadStatus(lastPage)),
            loading: false
          })
          if (lastPage.length < pageLimit) {
            isEnd = true
            this.setData({ loadMoreText: '已无更多' })
          }
        }
      }, 1000)
    }
  },

  toDetailPage: function (e) {
    let id = e.currentTarget.dataset.id
    let readedArticles = wx.getStorageSync('READED_ARTICLES')

    if (!readedArticles) {
      wx.setStorageSync('READED_ARTICLES', [id])
    } else if(readedArticles.indexOf(id) == -1) {
      readedArticles.push(id)
      wx.setStorageSync('READED_ARTICLES', readedArticles)
    }
    this.setData({ articles: this.addReadStatus(this.data.articles) })

    wx.navigateTo({
      // There is ` not ' in url.
      url: `../detail/detail?id=${id}`,
    })
  },

  addReadStatus: function(articles){
    let readedArticles = wx.getStorageSync('READED_ARTICLES')
    if(!readedArticles) {
      return articles
    }

    let newArticles = []
    for (let i = 0; i < articles.length; i++){
      // 此函数返回目标对象。仅可枚举自有属性从源对象复制到目标对象。可使用此函数合并或克隆对象。
      let article = Object.assign(articles[i])
      if (readedArticles.indexOf(article.id) != -1) {
        article.isReaded = true
      } else {
        article.isReaded = false
      }
      newArticles.push(article)
    }

    return newArticles
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