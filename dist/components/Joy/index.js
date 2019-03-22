import React from "../../ReactWX.js";

function Joy(props) {}

var Joy = React.toClass(Joy, React.Component, {
  render: function () {
    var h = React.createElement;
    console.log(this.props.res);
    return h("view", {
      class: "box"
    }, this.props.res.res.map(function (res, i265) {
      return h("view", {
        key: res.id
      }, h("view", null, res.title), h("view", null, res.text));
    }, this));;
  },
  classUid: "c663"
}, {});
Component(React.registerComponent(Joy, "Joy"));
export default Joy;