import React from "./ReactWX.js";

function Global(...args) {
  this.config = {
    window: {
      navigationBarBackgroundColor: '#00afc7',
      backgroundTextStyle: 'light',
      navigationBarTitleText: 'nanachi',
      navigationBarTextStyle: '#00afc7'
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
  classUid: "c744"
}, {});
export default App(new Global());