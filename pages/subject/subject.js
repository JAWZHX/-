// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/pages/images/haibao/haibao-1.jpg",
      "/pages/images/haibao/haibao-2.jpg",
      "/pages/images/haibao/haibao-3.jpg",
      "/pages/images/haibao/haibao-4.jpg",
      "/pages/images/haibao/haibao-5.jpg"
    ],
    list: [
      {
        id: 0,
        pic: "/pages/images/list/pic-1.jpg",
        title: "爱心早餐",
        count: 26,
        star: 19,
        review: 13298
      },
      {
        id: 1,
        pic: "/pages/images/list/pic-2.jpg",
        title: "营养炖菜",
        count: 46,
        star: 295,
        review: 191435
      },
      {
        id: 2,
        pic: "/pages/images/list/pic-3.jpg",
        title: "主食也不单调",
        count: 25,
        star: 134,
        review: 71012
      },
      {
        id: 3,
        pic: "/pages/images/list/pic-4.jpg",
        title: "中式简餐菜肴",
        count: 146,
        star: 122,
        review: 135966
      },
      {
        id: 4,
        pic: "/pages/images/list/pic-5.jpg",
        title: "犯懒专用宝宝饭",
        count: 43,
        star: 555,
        review: 553432
      },
      {
        id: 5,
        pic: "/pages/images/list/pic-6.jpg",
        title: "用烤箱解放你的双手",
        count: 35,
        star: 855,
        review: 372703
      }
    ]
  },

  // 查看菜谱详情内容
  seeDetail: function(e) {
    wx.navigateTo({
      url: '/pages/subjectDetail/subjectDetail?id='+e.currentTarget.id,
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