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
      title: '校园认证',

    });
  }

  uploadimg(e) {
    var that = this;
    var id = e.currentTarget.id;
    this.Base.uploadImage("student", (ret) => {
      that.Base.setMyData({
        photo: ret

      });
    }, 1);
  }

  name(e) {

    var name = e.detail.value;
    this.Base.setMyData({
      name: e.detail.value
    })
  }
  xuehao(e) {
    var xuehao = e.detail.value;
    this.Base.setMyData({
      xuehao: e.detail.value
    })
  }

  photo(e) {
    console.log(66666666666);
    var photo = e.detail.value;
    this.Base.setMyData({
      photo: e.detail.value
    })
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
  }

  confirm(e) {
    var data = e.detail.value;
    if (data.name == "") {
      this.Base.info("请输姓名");
      return;
    }

    if (data.xuehao == "") {
      this.Base.info("请输入学号");
      return;
    }
    // if (data.photo == "") {
    //   this.Base.info("请输入图片");
    //   return;
    // }


    var name = this.Base.getMyData().name;
    var xuehao = this.Base.getMyData().xuehao;
    var photo = this.Base.getMyData().photo;
     var status="A";
    var openid = this.Base.getMyData().UserInfo.openid;

    var that = this;


    var api = new OrderApi();

    api.studentcer({
      name:name,
      studentid:xuehao,
      studentimg:photo,
      status	:status,
      openid:openid

    }, (updetedriver) => {
       var pages = getCurrentPages();
       var beforePage = pages[pages.length - 2];
       wx.navigateBack({
         success() {
       beforePage.onLoad();
        wx.showToast({

         title: '认证成功',
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
body.xuehao = content.xuehao;
body.name = content.name;
body.photo = content.photo;
body.confirm = content.confirm;
Page(body)