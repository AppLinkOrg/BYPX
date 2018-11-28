// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  
  onLoad(options) {
 
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({tab:0});
  }
  
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.indexbanner({ }, (indexbanner) => {
      this.Base.setMyData({ indexbanner });
    });
    var api= new OrderApi();
    api.goodslist({}, (goodslist) => {
      this.Base.setMyData({ goodslist });
    });
    api.list({ inhome: "Y", isrecomm:"Y" }, (list) => {
      this.Base.setMyData({ list });
    });
  }
  changetab(e) {
    this.Base.setMyData({
      tab: e.currentTarget.id
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.changetab = content.changetab;
Page(body)