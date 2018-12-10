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
   
    this.Base.setMyData({ tab:0 });
    
   
  }

  onMyShow() {
    var that = this;
    //查询首页广告indexnotice
    var instapi = new InstApi();


    instapi.indexnotice({}, (tonzhilist) => {
      this.Base.setMyData({ tonzhilist });
    });

    instapi.instxuexiao({}, (xuexiaolist) => {
      this.Base.setMyData({ xuexiaolist });
    });

    instapi.indexbanner({}, (indexbanner) => {
      this.Base.setMyData({ indexbanner });
    });
    //查询导航列表
    var api = new OrderApi();
    api.goodslist({}, (goodslist) => {
      this.Base.setMyData({ goodslist });
    });
    //查询最新发布
    api.list({ inhome:"Y" }, (list) => {
      this.Base.setMyData({ list });
    });
    //查询热门推荐
    api.list({ inhome: "Y", isrecomm: "Y",  }, (list1) => {
      this.Base.setMyData({ list1 });
    });

  }
  changetab(e) {
    this.Base.setMyData({
      tab: e.currentTarget.id
    });


  }
  //收藏
  fav(e) {
    var api = new OrderApi();
    var faved = [];
    api.memberfav({ product_id: e.currentTarget.id,  }, (ret) => {
      if (ret.return == "") {
        this.Base.toast("取消收藏成功");


      } else {

        this.Base.toast("收藏成功");

      }
      //查询热门推荐
      api.list({ inhome: "Y"  }, (list) => {
        this.Base.setMyData({ list });
      });
      api.list({ inhome: "Y", isrecomm: "Y",}, (list1) => {
        this.Base.setMyData({ list1 });
      });
    });


  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.changetab = content.changetab;
body.fav = content.fav;
Page(body)