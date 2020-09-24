import React from "../../ReactWX.js";
var app = React.getApp();

function P() {
  this.state = {
    userinfo: "",
    headurl: ""
  };
}

var P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setState({
        userinfo: userInfo.nickName,
        headurl: userInfo.avatarUrl
      });
    });
  },
  link: function () {
    React.api.navigateTo({
      url: "/pages/joy/index"
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "page",
      onTap: this.link,
      "data-tap-uid": "e30_30",
      "data-beacon-uid": "default"
    }, h(React.useComponent, {
      text: this.state.userinfo,
      head: this.state.headurl,
      is: "Welcome",
      "data-instance-uid": 'i31_16_' + 0
    }));;
  },
  classUid: "c986"
}, {});
Page(React.registerPage(P, "pages/index/index"));
export default P;