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
      title: '举报',

    });
  }

  onLoad(options) {

    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    var instapi = new InstApi();
    instapi.alerttype({}, (alerttype) => {
      this.Base.setMyData({ alerttype });
    }, false); 
  }
  onMyShow() {
    var that = this;

    // var api = new OrderApi();
    // api.goods({ id: that.Base.options.id }, (list) => {
    //   this.Base.setMyData({ list });
    // });
  }
  radioChange(e){
    this.Base.setMyData({ xz: e.detail.value });
  }

  confirm(e) {
    console.log(e.detail.value);
    var data = e.detail.value;
    data.product_id = this.Base.options.id;
    if (data.alert_id == "") {
      this.Base.info("请选择投诉类型");
      return;
    }
    var that = this;
    var api = new InstApi();
     api.alert(data, (ret) => {
       if (ret.code == 0) {

         wx.showModal({
          
           showCancel: false,
           content: "提交成功，管理员会尽快审核",
           success(e) {
             if (e.confirm) {

               wx.navigateBack({




               })

             }

           }

         })

       
             
  

       } else {

         wx.showModal({
           title: '提示',
           showCancel:false,
           content: ret.return,
           success(e) {
             if (e.confirm) {
              
               wx.navigateBack({
                
        
                
                 
               })

             }
            
           }
         })






       
       }
     });

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.radioChange = content.radioChange;
body.confirm = content.confirm;
Page(body)