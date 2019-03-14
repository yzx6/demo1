//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    imgUrls: ["../images/banner.gif","https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",  "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 300
  },
 jump:function(){
   wx.navigateTo({
     url: '../index/index',
   })
 }

})
