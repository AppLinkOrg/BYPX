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
      title: '选择发布项',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  rz(){
 
    wx.showModal({
      title: '提示',
      content: '您还没有认证,是否前往认证',
      success(e) {
if(e.confirm)
{
  wx.navigateTo({
    url: '/pages/wode/wode',
  })
        
      }
      else if(e.cancel){

  wx.switchTab({
    url: '/pages/home/home',
  })


      }
      }
    })
   

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
body.rz=content.rz;
Page(body)