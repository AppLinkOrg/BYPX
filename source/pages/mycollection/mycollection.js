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
      title: '我的收藏',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  quxiao(e){
    
    var that = this;
    var api = new OrderApi();
    var faved = [];
    api.memberfav({ product_id: e.currentTarget.id, }, (ret) => {
      if (ret.return == "") {
        this.Base.toast("取消收藏成功");


      } else {

        this.Base.toast("收藏成功");

      }
      //查询热门推荐

      api.listpav({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {


        this.Base.setMyData({ list, });
      });

    });


  }


  
  onMyShow() {
    var that = this;
      
     var api = new OrderApi();
    api.listpav({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {
       
         
      this.Base.setMyData({ list, });
     });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.quxiao = content.quxiao;
Page(body)