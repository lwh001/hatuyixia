import React from '@react';
import Welcome from '@components/Welcome/index';
import './index.scss';
var app = React.getApp();

class P extends React.Component {
    constructor(){
        super();
        this.state={
            userinfo:"",
            headurl:""
        }
    }
    componentDidMount() {
        var that  =this;
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setState({
                userinfo:userInfo.nickName,
                headurl:userInfo.avatarUrl
            })
          })
    }
    link(){
        var url = "/pages/joy/index";
        React.api.navigateTo({ url:"/pages/joy/index" });
    }
    render() {
        return (
            <div class='page' onClick={this.link}>
                <Welcome text={this.state.userinfo} head={this.state.headurl}/>
            </div>
        );
    }
}

export default P;