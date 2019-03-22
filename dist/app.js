import React from "./ReactWX.js";

function Global(...args) {
  this.config = {
    window: {
      navigationBarBackgroundColor: '#00afc7',
      backgroundTextStyle: 'light',
      navigationBarTitleText: '哈图一下',
      navigationBarTextStyle: 'black'
    }
  };
  this.globalData = {
    userInfo: null,
    buildType: "wx"
  };

  this.getUserInfo = cb => {
    var that = this;

    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    } else {
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  };
}

var Global = React.toClass(Global, React.Component, {
  onLaunch: function () {
    if (this.$data && typeof global === 'object') {
      var ref = Object.getPrototypeOf(global) || global;

      var _this = this;

      ref.getApp = function () {
        return _this;
      };
    }

    console.log('App launched');
  },
  classUid: "c1412"
}, {});
export default App(new Global());