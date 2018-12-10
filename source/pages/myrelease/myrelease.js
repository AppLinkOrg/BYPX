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
      title: '我的发布',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({ tab: 0 });
  }
  onMyShow() {
    var that = this;

    var api = new OrderApi();
    api.list({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {
      this.Base.setMyData({ list });
      
    });
    api.list1({ member_id: this.Base.getMyData().memberinfo.id }, (list1) => {
      this.Base.setMyData({ list1 });

    });


  }

  shangjia(e) {
    console.log(e.currentTarget.id);
    var list = this.Base.getMyData().list1[e.currentTarget.id];
    console.log(list);
    var api = new OrderApi();
    api.addproduct({
      primary_id: list.id,
      inst_id: this.Base.getMyData().inst_id,
      cat_id: list.cat_id,
      name: list.name,
      summary: list.summary,
      cover: list.cover,
      poster: list.poster,
      shareposter: list.shareposter,
      price: list.price,
      oriprice: list.oriprice,
      status: "A"
    }, (updetedriver) => {

      api.list({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {
        this.Base.setMyData({ list });
      });
      api.list1({ member_id: this.Base.getMyData().memberinfo.id }, (list1) => {
        this.Base.setMyData({ list1 });

      });
    });
  }

  changetab(e) {
    this.Base.setMyData({
      tab: e.currentTarget.id
    });
  }
  shanchu(e){


    console.log(e.currentTarget.id);
    var api = new OrderApi();
    api.removeproduct({ idlist: e.currentTarget.id},(qqq)=>{
      api.list({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {
        this.Base.setMyData({ list });
      });
      api.list1({ member_id: this.Base.getMyData().memberinfo.id }, (list1) => {
        this.Base.setMyData({ list1 });

      });
    

    })

  }
  xj(e){
    console.log(e.currentTarget.id);
    var list = this.Base.getMyData().list[e.currentTarget.id];
    console.log(list);
    var api = new OrderApi();
    api.addproduct({
      primary_id:list.id,
      inst_id: this.Base.getMyData().inst_id,
      cat_id: list.cat_id,
      name: list.name,
      summary: list.summary,
      cover: list.cover,
      poster: list.poster,
      shareposter:list.shareposter,
      price: list.price,
      oriprice: list.oriprice ,
      status:"I"
    }, (updetedriver) => {
   
      api.list({ member_id: this.Base.getMyData().memberinfo.id }, (list) => {
        this.Base.setMyData({ list });
      });
      api.list1({ member_id: this.Base.getMyData().memberinfo.id }, (list1) => {
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
body.shangjia= content.shangjia;
body.xj=content.xj;
body.shanchu = content.shanchu;
Page(body)