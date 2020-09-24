import React from '@react';
import './pages/index/index';
import "./pages/joy/index";
class Global extends React.Component {
    //全局配置
    config = {
        window: {
            navigationBarBackgroundColor: '#00afc7',
            backgroundTextStyle: 'light',
            navigationBarTitleText: '哈图一下',
            navigationBarTextStyle: 'black'
        }
    };
    //全局数据
    globalData= {
        userInfo:null
      }
    onLaunch() {
        //针对快应用的全局getApp补丁
        if (this.$data && typeof global === 'object') {
            var ref = Object.getPrototypeOf(global) || global;
            var _this = this;
            ref.getApp = function() {
                return _this;
            };
        }
        console.log('App launched');//eslint-disable-line
    };
    getUserInfo=(cb)=>{
        var that = this
        if(this.globalData.userInfo){
          
          typeof cb == "function" && cb(this.globalData.userInfo)
        }else{
          //调用登录接口
          wx.login({
            success: function () {
              wx.getUserInfo({
                success: function (res) {
                  that.globalData.userInfo = res.userInfo
                  typeof cb == "function" && cb(that.globalData.userInfo)
                }
              })
            }
          })
        }
      };
      
}
// eslint-disable-next-line
export default App(new Global());
