import React from "../../ReactWX.js";
var app = React.getApp();

function P() {
  this.config = {
    navigationBarTitleText: '嗨皮一下'
  };
  this.state = {
    userinfo: "",
    headurl: "",
    res: null
  };
}

var P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    this.request();
  },
  request: function () {
    var that = this;
    React.api.request({
      url: "https://way.jd.com/showapi/wbxh?time=2015-07-10&page=1&maxResult=20&showapi_sign=bd0592992b4d4050bfc927fe7a4db9f3&appkey=0cde525d5438e957c3051eefeed70f6d ",
      success: function (res) {
        that.setState({
          res: res.data.result.showapi_res_body.contentlist
        });
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "page"
    }, h(React.useComponent, {
      res: this.state.res,
      is: "Joy",
      "data-instance-uid": 'i37_16_' + 0
    }));;
  },
  classUid: "c1176"
}, {});
Page(React.registerPage(P, "pages/joy/index"));
export default P;