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
      title: '消息',

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
    var sj = [];
    api.replymedetail({ reply_member_id: this.Base.getMyData().memberinfo.id, isread: 'N' }, (commentlist) => {

      // for (var i = 0; i < commentlist.length; i++) {
      //   sj[i] = that.time_ago(commentlist[i].comment_time_timespan)
      //   var img = commentlist[i].product_images.split(",");
      //   commentlist[i].product_images = img[0];
      // }

      this.Base.setMyData({ commentlist, sj });



    });
    var memberApi = new MemberApi();
    var chatmember1 = [];
    var ss = 2000;
    memberApi.chatmember({}, (chatmember) => {
      memberApi.deletchatlist({ deleteid: this.Base.getMyData().memberinfo.id }, (deletchatlist) => {
        if (deletchatlist.length == 0) {

          for (var i = 0; i < chatmember.length; i++) {
            chatmember1.push(chatmember[i]);

          }

        }
        else {
         
          for (var i = 0; i < chatmember.length; i++) {

            chatmember[i].chat.timeduration = that.time_ago(chatmember[i].chat.sent_time_timespan);

           
            for (var j = 0; j < deletchatlist.length; j++) {
         
              if (chatmember[i].id == deletchatlist[j].other
                && this.Base.getMyData().memberinfo.id == deletchatlist[j].deleteid && chatmember[i].chat.product == deletchatlist[j].product_id) {
                    
                  chatmember[i].status="N";
                

              } 
            
              else   {
                
                  
                


              }

            }


          }
        }
        this.Base.setMyData({ chatmember: chatmember, chatmember1: chatmember1 });
        this.Base.setMyData({ deletchatlist: deletchatlist });


      })


    });

  }

  time_ago(agoTime) {

    // 计算出当前日期时间到之前的日期时间的毫秒数，以便进行下一步的计算
    var time = (new Date()).getTime() / 1000 - agoTime;

    var num = 0;
    if (time >= 31104000) { // N年前
      num = parseInt(time / 31104000);
      return num + '年前';
    }
    if (time >= 2592000) { // N月前
      num = parseInt(time / 2592000);
      return num + '月前';
    }
    if (time >= 86400) { // N天前
      num = parseInt(time / 86400);
      return num + '天前';
    }
    if (time >= 3600) { // N小时前
      num = parseInt(time / 3600);
      return num + '小时前';
    }
    if (time > 60) { // N分钟前
      num = parseInt(time / 60);
      return num + '分钟前';
    }
    return '1分钟前';
  }
  //删除
  shanchu(e) {

    var that = this;
    var id3 = (e.target.dataset.name)
    var id1 = (e.target.dataset.id);
    var id2 = (e.currentTarget.id);

    wx.showModal({
      title: '提示',
      content: '是否确定要删除该聊天记录？',
      showCancel: true,//是否显示取消按钮


      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {

          var api = new MemberApi();
          api.deletchat({ deleteid: that.Base.getMyData().memberinfo.id, other: id1, product_id: id3 }, (res) => {

            that.onMyShow();

          })



        }
      },

    })








  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.time_ago = content.time_ago;
body.shanchu = content.shanchu;
Page(body)