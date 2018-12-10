

import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  //界面标题
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '求购',

    });
  }
  uploadimg() {
    var that = this;
    this.Base.uploadImage("product", (ret) => {
      var images = that.Base.getMyData().images;
      images.push(ret);
      that.Base.setMyData({ images });
    });
  }
  


  qwe(e) {
    this.setData({
      index: e.detail.value
    })
    this.Base.setMyData({
      xz: "Y",
      cat_id: this.Base.getMyData().goodslist[e.detail.value].id
    })
  }


  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.setData({
      passwordInputHidden: true,
      password: 123456,
      cat_id: "",
      images: [],
      minusImg1:true,
      images1: ["0371f452260748a0e83738de256cf624_18120715019.png "],
    })
  }
  onMyShow() {
    var that = this;

    var api = new OrderApi();
    api.goodslist({}, (goodslist) => {

      //删除求购商品
      goodslist.splice(0, 9);

      this.Base.setMyData({ goodslist });
    });
  }
  name(e) {
    var name = e.detail.value;
    this.Base.setMyData({
      name: e.detail.value
    })
  }
  summary(e) {
    var summary = e.detail.value;
    this.Base.setMyData({
      summary: e.detail.value
    })
  }

  price(e) {
    var price = e.detail.value;
    this.Base.setMyData({
      price: e.detail.value
    })
  }
  price1(e) {
    var price1 = e.detail.value;
    this.Base.setMyData({
      price1: e.detail.value
    })
  }


  minusImg(e) {
    var that = this;
    var seq = e.currentTarget.id;
    var images = that.Base.getMyData().images;
    var imgs = [];
    for (var i = 0; i < images.length; i++) {
      if (seq != i) {
        imgs.push(images[i]);
      }
    }
    that.Base.setMyData({ images: imgs });
  } 
 

  



  passwordInputHidden() {
    this.setData({
      passwordInputHidden: !this.data.passwordInputHidden  //取反 打开关闭小键盘
    });
    this.setData({
      inputPassword: ''
    });
  }
  //删除输入错误的密码
  

  jg() {
    console.log(6666666666);
    this.passwordInputHidden();
  }



  confirm(e) {
    var data = e.detail.value;
    if (data.name == "") {
      this.Base.info("请输入宝贝名");
      return;
    }
    if (data.summary == "") {
      this.Base.info("请输入描述");
      return;
    }
    
   
    if (data.price == "") {
      this.Base.info("请输入价格");
      return;
    }
    if (data.price1 == "") {
      this.Base.info("请输入原价");
      return;
    }
    
    var images = this.Base.getMyData().images;
    var photo=images[0];
    var name = this.Base.getMyData().name;
 
    if (this.Base.getMyData().images.length==0){
      console.log(111111111);
      console.log(images);
      console.log(photo);
      images = this.Base.getMyData().images1;
      photo = "0371f452260748a0e83738de256cf624_18120715019.png ";
      
       
    }

    var summary = this.Base.getMyData().summary;
    var cat_id = 9;

    var price = this.Base.getMyData().price;
    var price1 = this.Base.getMyData().price1;


    var that = this;


    var api = new OrderApi();

    api.addproduct({
      inst_id: this.Base.getMyData().inst_id,
      cat_id: cat_id,
      name: name,
      summary: summary,
      cover: photo,
      images: images.join(","),
      status: "A",
      price: price,
      oriprice: price1
    }, (updetedriver) => {
      var pages = getCurrentPages();
      var beforePage = pages[pages.length - 2];
      wx.navigateBack({
        success() {
          beforePage.onLoad();
          wx.showToast({

            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    });
  }





}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.uploadimg = content.uploadimg;
body.photo = content.photo;
body.qwe = content.qwe;
body.clear = content.clear;
body.passwordInputHidden = content.passwordInputHidden;
body.inputPassword = content.inputPassword;
body.jg = content.jg;
body.name = content.name;
body.summary = content.summary;
body.price = content.price;
body.price1 = content.price1;
body.confirm = content.confirm;
body.minusImg = content.minusImg;
body.minusImg1 = content.minusImg1;

Page(body)