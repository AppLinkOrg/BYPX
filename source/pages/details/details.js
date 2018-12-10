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
    this.Base.setMyData({ passwordInputHidden: true });

  }
  fav(e) {
    var that = this;
    var api = new OrderApi();
    api.memberfav({ product_id: e.currentTarget.id, }, (ret) => {
      api.goods({ id: that.Base.options.id }, (list) => {
       
        list.images = list.images.split(",");

        this.Base.setMyData({ list });
      });

      if (ret.return == "") {
        this.Base.toast("取消收藏成功");


      } else {

        this.Base.toast("收藏成功");

      }
      api.commentlist({ product_id: that.Base.options.id }, (commentlist) => {

        this.Base.setMyData({ commentlist, isfav: ret.return == "" ? "0" : "1" });

         

      });
     

    })
   
  }
  onMyShow() {
    var that = this;

    var api = new OrderApi();
    var api1 = new MemberApi();
    

    api.goods({ id: that.Base.options.id }, (list) => {

      list.images = list.images.split(",");
      console.log(list.images);
      this.Base.setMyData({ list,  });
      api1.userlist({ id: list.member_id }, (userlist) => {



        this.Base.setMyData({ userlist });

      });
      api.commentlist({ product_id: that.Base.options.id }, (commentlist) => {



        this.Base.setMyData({ commentlist, isfav: this.Base.getMyData().list.isfav, });

      });

    });

  }
  passwordInputHidden() {
    this.setData({
      passwordInputHidden: !this.data.passwordInputHidden  //取反 打开关闭小键盘
    });
    this.setData({

    });
  }
  ly() {
    console.log(6666666666);
    this.passwordInputHidden();
  }
  liuyan(e) {
    var liuyan = e.detail.value;

    this.Base.setMyData({
      liuyan: e.detail.value
    })
  }

  //留言
  confirm(e) {
    var data = e.detail.value;

    if (data.liuyan == "") {
      this.Base.info("请输入留言");
      return;
    }
    var reply_member_id = this.Base.getMyData().userlist.id;
    var liuyan = this.Base.getMyData().liuyan;
    var comment_time = Date.parse(new Date());
    var product_id = this.Base.getMyData().list.id;
    var that = this;


    var api = new OrderApi();

    api.comment({
      reply_member_id: reply_member_id,
      comment_time: comment_time,
      product_id: product_id,
      comment: liuyan,

    }, (updetedriver) => {
      api.commentlist({ product_id: that.Base.options.id }, (commentlist) => {



        this.Base.setMyData({ commentlist, isfav: that.Base.getMyData().list.isfav, passwordInputHidden: true, inputValue: "" });

      });


    });
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.fav = content.fav;
body.passwordInputHidden = content.passwordInputHidden;
body.ly = content.ly;
body.liuyan = content.liuyan;
body.confirm = content.confirm;
Page(body)