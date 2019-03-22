import React from "../../ReactWX.js";

function Welcome(props) {
  this.state = {
    text: props.text
  };
}

var Welcome = React.toClass(Welcome, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "welcome-text"
    }, "Hello, ", this.state.text, ".");;
  },
  classUid: "c376"
}, {});
Component(React.registerComponent(Welcome, "Welcome"));
export default Welcome;