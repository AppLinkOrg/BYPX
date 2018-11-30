
// pages/content/content.js
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
      title: '发布',

    });
  }
  uploadimg(e) {
    var that = this;
    var id = e.currentTarget.id;
    var photo = [];
    this.Base.uploadImage("product", (ret) => {
      photo.push(ret);
   
      that.Base.setMyData({

        photo

      });
    }, 3);
  }
  photo(e) {
    var photo = e.detail.value;
    console.log(photo);
    this.Base.setMyData({
      photo: e.detail.value
    })
  }


  qwe(e) {
    this.setData({
      index: e.detail.value
    })
    this.Base.setMyData({
      xz:"Y",
      cat_id: this.Base.getMyData().goodslist[e.detail.value].id
    })
  }

 
  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.setData({
      passwordInputHidden:true,
      password: 123456,
      cat_id:"",
     
      
    })
  }
  onMyShow() {
    var that = this;

    var api = new OrderApi();
    api.goodslist({}, (goodslist) => {
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





  inputPassword(e) {
    
    // //键盘输入的密码 赋值给inputPassword
    // this.data.inputPassword = this.data.inputPassword + e.currentTarget.dataset.key;
    // console.log(this.data.inputPassword);
    // this.setData({
    //   inputPassword: this.data.inputPassword
    // });
    // //当输入密码正确时   
    // if (this.data.inputPassword.length == 6 && this.data.password == this.data.inputPassword) {

    //   this.passwordInputHidden();//关闭小键盘
    // }
    //当输入密码错误时  给个提示 并且把输入的密码清零
    // if (this.data.inputPassword.length == 6 && this.data.password != this.data.inputPassword) {
    //   wx.showModal({
    //     title: "提示",
    //     content: "输入密码错误",
    //   })
    //   this.setData({
    //     inputPassword: ''
    //   });
    // }
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
  clear() {
    var index = this.data.inputPassword.length;
    if (index > 0) {
      var inputPassword = this.data.inputPassword.substr(0, index - 1);
      this.setData({
        inputPassword: inputPassword
      });
    }
  }

 jg(){
 console.log(6666666666);
   this.passwordInputHidden();
 }



  confirm(e) {
    var data = e.detail.value;
    if (data.name == "") {
      this.Base.info("请输姓名");
      return;
    }
    if (data.summary == "") {
      this.Base.info("请输入描述");
      return;
    }
    if (data.photo == "") {
      this.Base.info("请上传介绍图片");
      return;
    }
    if (data.cat_id == "") {
      this.Base.info("请选择分类");
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
    var name = this.Base.getMyData().name;
    var photo = this.Base.getMyData().photo[0];
    var photo1 = this.Base.getMyData().photo[1];
    var photo2 = this.Base.getMyData().photo[2];
    var summary = this.Base.getMyData().summary;
    var cat_id = this.Base.getMyData().cat_id;

    var price = this.Base.getMyData().price;
    var price1 = this.Base.getMyData().price1;
   

    var that = this;


    var api = new OrderApi();

    api.addproduct({
      inst_id: this.Base.getMyData().inst_id,
      cat_id:cat_id,
      name: name,
      summary: summary,
      cover: photo,
      poster: photo1,
      shareposter:photo2,
      status:"A",
      price:price,
      oriprice:price1
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
body.jg=content.jg;
body.name = content.name;
body.summary = content.summary;
body.price = content.price;
body.price1 = content.price1 ;
body.confirm = content.confirm;

Page(body)