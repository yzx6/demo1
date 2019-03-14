//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newMsg:[],
    id:0,
    message:[
      {
        id:0,
        img:"../images/pic.gif",
        name:"狂想情人",
        author:"暗黑兔文化",
        tag:"渣男必须死"
      },
      {
        id: 1,
        img: "../images/pic.gif",
        name: "魔法剩女攻略计划",
        author: "曼玉动漫",
        tag: "变身魔法少女，再去恋爱"
      },
      {
        id: 2,
        img: "../images/pic.gif",
        name: "捉妞记",
        author: "痴情树德双薪",
        tag: "老实人必看的恋爱宝典"
      },
      {
        id: 3,
        img: "../images/pic.gif",
        name: "神说要有光",
        author: "痴情树德双薪",
        tag: "老实人必看的恋爱宝典"
      },
      {
        id: 4,
        img: "../images/pic.gif",
        name: "神说要有光",
        author: "MENJ是我",
        tag: "救命，我变成女孩子"
      },
      {
        id: 5,
        img: "../images/pic.gif",
        name: "仙宙",
        author: "蜂群工作室",
        tag: "他的成仙之路"
      },
    ]
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow:function(){
    // console.log(this.data.message)
  },
  onPullDownRefresh:function(){//下拉
    var  message=[]
    this.data.id++
    console.log(this.data.id)
    for (var i = 0; i < this.data.message.length; i++) {
      message.push({
        id: 5,
        img: "../images/pic.gif",
        name: "仙宙",
        author: "蜂群工作室"+this.data.id,
        tag: "他的成仙之路"
      });
    }
    this.setData({
      message
    })
  },
  onReachBottom: function () {//上拉
    var message = this.data.message
    //console.log(this.data.message.length)
    this.data.id++
    for (var i = 0, len = 6; i < len; i++) {
      message.push({
        img: "../images/pic.gif",
        name: "仙宙",
        author: "蜂群工作室" + this.data.id,
        tag: "他的成仙之路"
      });
    }
    this.setData({
      message
    })
  }
})
