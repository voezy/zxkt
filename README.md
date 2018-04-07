# 知晓课堂系列培训（小程序）部分Demo
## 关于
这是知晓课堂小程序系列培训中部分练习项目的集合，逻辑代码基本与官方的练习指引一致。
包括：
- 第4、5章的“在小程序里阅读文章”, 项目目录为article
- 第7、8章的“在小程序里查询天气”，项目目录为weather
- 第9、10章的“小程序表单与医疗急救卡”, 项目目录为medicalCard    

导入到微信开发者工具当中时，可能会有项目名重复，重命名就好。

## 预览
- article    

![article-home](http://p6rwgc11e.bkt.clouddn.com/zxkt-article.jpeg)
![article-detail](http://p6rwgc11e.bkt.clouddn.com/zxkt-article2.jpeg)  

- weather    

![weather](http://p6rwgc11e.bkt.clouddn.com/zxkt-weather-tab1.jpeg)
![map](http://p6rwgc11e.bkt.clouddn.com/zxkt-weather-tab2.jpeg)

- medicalCard    

![medicalCard-create](http://p6rwgc11e.bkt.clouddn.com/zxkt-medicalCard-createBtn.jpeg)
![medicalCard-detail](http://p6rwgc11e.bkt.clouddn.com/zxkt-medicalCard-detail.jpeg)
## 提示
只是个人练习的代码放上来，因为是新手所以代码写得有点糟糕。    
项目代码与官方的基本一致，不一样的地方可能是因为官方教程说明不够清楚而自行选择解决方法(比如某些因为自己蠢而get不到的点)，或者因为条件限制而作出改变（比如因为自己懒而没有尝试上服务器保存medicalCard那个Demo的记录进行联动）。    
有部分差异可以从我的总结里面找到原因： [知晓课堂小程序教程学习记录以及问题](https://blog.voezy.com/cyber/zxkt-miniprogram-records-problem.html)。    
还有，weather项目要自己在腾讯地图和心知天气注册账号并且申请开发者key，然后在/page/index/新建一个key.js文件保存两个网站的开发者key，文件结构如下：    
```
// tencentMap是腾讯地图的开发者秘钥
// seniverse是心知天气的开发者秘钥
var key = {
  tencentMap: '你的腾讯地图开发者密钥',
  seniverse: '你的心知天气开发者密钥'
}

module.exports = key
```
## 图片来源
地图marker、天气tab、地图tab图标来源: 
<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## 就酱