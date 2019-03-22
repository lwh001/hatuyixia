import React from "../../ReactWX.js";

function P() {}

var P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    console.log('page did mount!');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "page"
    }, h(React.useComponent, {
      text: "nanachi",
      is: "Welcome",
      "data-instance-uid": 'i12_16_' + 0
    }));;
  },
  classUid: "c481"
}, {});
Page(React.registerPage(P, "pages/index/index"));
export default P;