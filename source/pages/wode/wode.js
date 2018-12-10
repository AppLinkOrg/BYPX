// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
import { MemberApi } from "../../apis/member.api";
class Content extends AppBase {
  constructor() {
    super();
  }
  //界面标题
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '我的资料',

    });
  }

  onLoad(options) {
     
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var api = new InstApi();
    api.shanchuan({ id: that.Base.getMyData().memberinfo.id, img: "'" + that.Base.getMyData().ret + "'" }, (updeteimg) => {
      console.log(666666666);
      console.log(that.Base.getMyData().memberinfo.id);
      console.log(that.Base.getMyData().ret);

    })
  }

  uploadimg() {


    var uploadpath = this.Base.getMyData().uploadpath;
    this.Base.uploadImage("member", (photo) => {

      this.Base.setMyData({ photo: uploadpath + "member/" + photo });
    });


  }

  shanchuan() {

    var that = this;


    var api = new InstApi();
    api.shanchuan({ id: that.Base.getMyData().memberinfo.id, img: "'" + that.Base.getMyData().ret + "'" }, (updeteimg) => {
      console.log(666666666);
      console.log(that.Base.getMyData().memberinfo.id);
      console.log(that.Base.getMyData().ret);

    })


  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.uploadimg = content.uploadimg;
body.onMyShow = content.onMyShow;
body.shanchuan = content.shanchuan;
Page(body)