import React from "../../ReactWX.js";

function Welcome(props) {}

var Welcome = React.toClass(Welcome, React.Component, {
  componentDidMount: function () {
    setTimeout(this.link, 2000);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "box"
    }, h("image", {
      src: this.props.head,
      width: "10",
      height: "10"
    }), h("view", {
      class: "welcome-text"
    }, "Hello, ", this.props.text));;
  },
  link: function () {
    React.api.navigateTo({
      url: "/pages/joy/index"
    });
  },
  classUid: "c620"
}, {});
Component(React.registerComponent(Welcome, "Welcome"));
export default Welcome;