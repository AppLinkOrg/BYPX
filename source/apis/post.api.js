
        /****使用方法，下面两句复制到page的js文件的头部
		
import { ApiConfig } from '../../apis/apiconfig';
import { InstApi } from '../../apis/inst.api';

var instApi=new InstApi();
        *******/
import { ApiConfig } from 'apiconfig';
import { ApiUtil } from 'apiutil';

export class PostApi
{
			//获取机构的基础信息
				info(json, callback, showLoading = true) {

					if (showLoading)
					ApiConfig.ShowLoading();
    
					var header=ApiConfig.GetHeader();
					console.log(header);
					wx.request({
					  url: ApiConfig.GetApiUrl() + 'post/info',
					  data: json,
					  method: 'POST',
					  dataType: 'json',
					  header: header,
					  success: function (res) {
              if (callback != null) {
                res.data = ApiUtil.fixRename(res.data);
						  callback(res.data);
						}
					  },
					  fail: function (res) {
						console.log(res);
						callback(false);
					  },
					  complete: function (res) {
						console.log(res);

						if (showLoading)
						ApiConfig.CloseLoading();
					  }
					})
				  }
                

        //获取机构的基础信息
        list(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/list',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                res.data=ApiUtil.fixRename(res.data);
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }


        //获取机构的基础信息
        create(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/create',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }



        //获取机构的基础信息
        comment(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/comment',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }


        //获取机构的基础信息
        commentlist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/commentlist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                res.data = ApiUtil.fixRename(res.data);
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }



        //获取机构的基础信息
        like(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/like',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }



        //获取机构的基础信息
        follow(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/follow',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }
        //获取机构的基础信息
        fix(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/fix',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        poster(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/poster',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        next(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/next',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }
        //获取机构的基础信息
        commentlike(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/commentlike',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }
        //获取机构的基础信息
        commentlikelist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/commentlikelist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                res.data = ApiUtil.fixRename(res.data);
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        catlist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/catlist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        mycommentlist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/mycommentlist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        atmecommentlist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/atmecommentlist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }

        //获取机构的基础信息
        likelist(json, callback, showLoading = true) {

          if (showLoading)
            ApiConfig.ShowLoading();

          var header = ApiConfig.GetHeader();
          console.log(header);
          wx.request({
            url: ApiConfig.GetApiUrl() + 'post/likelist',
            data: json,
            method: 'POST',
            dataType: 'json',
            header: header,
            success: function (res) {
              if (callback != null) {
                callback(res.data);
              }
            },
            fail: function (res) {
              console.log(res);
              callback(false);
            },
            complete: function (res) {
              console.log(res);

              if (showLoading)
                ApiConfig.CloseLoading();
            }
          })
        }
}

