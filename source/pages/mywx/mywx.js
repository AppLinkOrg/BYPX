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
    
    var api = new MemberApi();
    api.getwx({ member_id: that.Base.getMyData().memberinfo.id}, (wxinfo) => {
      that.Base.setMyData({ wxinfo });
    })
  }

  confirm(e) {
    var  that=this;
    var data = e.detail.value;
    
    var wx1 = data.wx;
    var memberid = this.Base.getMyData().memberinfo.id;
    var id = this.Base.getMyData().wxinfo;
    console.log(id);
    if(id!=""){
      var api = new MemberApi();
      api.addwx({ wx: wx1, primary_id: id[0].id, member_id: memberid }, (updetedriver)=>{

        that.onMyShow();
        wx.navigateBack(


        )
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        })  

      })


    }
    else{ 

      var api = new MemberApi();
      api.addwx({ wx: wx1,  member_id: memberid }, (updetedriver) => {

        that.onMyShow();
        wx.navigateBack(


        )
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })  


      })

    }
   




  }

 


}
var content = new Content();
var body = content.generateBodyJson();
body.confirm = content.confirm;
body.onLoad = content.onLoad;
body.uploadimg = content.uploadimg;
body.onMyShow = content.onMyShow;
body.shanchuan = content.shanchuan;
Page(body)