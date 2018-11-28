
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
    this.Base.uploadImage("driver", (ret) => {
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

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;

    // var api = new OrderApi();
    // api.goods({ id: that.Base.options.id }, (list) => {
    //   this.Base.setMyData({ list });
    // });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.uploadimg = content.uploadimg;
body.photo = content.photo
Page(body)