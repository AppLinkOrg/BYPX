// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { OrderApi } from "../../apis/order.api.js";
import {
  MemberApi
} from "../../apis/member.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  //界面标题
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '搜索',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
   
    this.Base.setMyData({
      inputShowed: true,
      inputVal: "",
      currenttab: 0,
      tab: 0
    });
    super.onLoad(options);
  }
  inputTyping(e) {
    this.Base.setMyData({
      inputVal: e.detail.value
    });
  }
  onMyShow() {
    var that = this;
    var api = new OrderApi();
    api.searchkeyword({}, (ret) => {
      console.log(ret);
      console.log(66666666);
      this.Base.setMyData({ history: ret.history, hotest: ret.hotest });
    });
  }
  clearrecord() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否确定清空我的搜索记录？',
      success(e) {
        if (e.confirm) {
          var api=new MemberApi();
          api.delkeyword({ member_id: that.Base.getMyData().memberinfo.id},(qwe)=>{
              that.onMyShow();
 
         })
         
        }
      }
    })
  }
  sousuo(){
    console.log(5555);
    var that = this;
    var api = new OrderApi();

    api.search({ keyword: that.Base.getMyData().inputVal },(list)=>{
   
      console.log(list);

      this.Base.setMyData({list });

    })


  }
  sousuo1() {
   
    var that = this;
    var api = new OrderApi();

    api.search({ keyword: that.Base.getMyData().inputVal }, (list) => {

      console.log(list);

      this.Base.setMyData({ list });

    })


  }
  changetab(e) {
    this.Base.setMyData({
      tab: e.currentTarget.id
    });


  }
  searchKeyword(e) {
  var   that=this;
    var val = e.currentTarget.id;
    var api = new OrderApi();
    this.Base.setMyData({
      inputVal: val, inputShowed: true
    });
    api.search({ keyword: that.Base.getMyData().inputVal }, (list) => {
      console.log(that.Base.getMyData().inputVal);
      console.log(list);

      this.Base.setMyData({ list });

    })
  }
  fav(e) {
    var api = new OrderApi();
    var faved = [];
    api.memberfav({ product_id: e.currentTarget.id, }, (ret) => {
      if (ret.return == "") {
        this.Base.toast("取消收藏成功");


      } else {

        this.Base.toast("收藏成功");

      }
      //查询热门推荐
      this.sousuo1();
    });


  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.inputTyping = content.inputTyping;
body.sousuo = content.sousuo;
body.sousuo1 = content.sousuo1;
body.clearrecord = content.clearrecord;
body.changetab = content.changetab;
body.searchKeyword = content.searchKeyword;
body.fav = content.fav;
Page(body)