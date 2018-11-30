// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
import { MemberApi } from "../../apis/member.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  //界面标题
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '商品详情',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;

    var api = new OrderApi();
    var api1 = new MemberApi();
    var imags=[];
    api.goods({ id: that.Base.options.id }, (list) => {

      imags[0] = [list.cover];
      imags[1] = [list.poster];
      imags[2] = [list.shareposter]

      this.Base.setMyData({ list,imags });
      console.log(list.member_id);
      console.log(66666666666);
      api1.userlist({ id: list.member_id }, (userlist) => {



        this.Base.setMyData({ userlist });

      });

    });
  
   
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)