import React from '@react';
import Joy from '@components/Joy/index';
import './index.scss';
var app = React.getApp();

class P extends React.Component {
    constructor(){
        super();
        this.state={
            userinfo:"",
            headurl:"",
            res:null
        }
    }
    config = {
        navigationBarTitleText: '嗨皮一下'
    };
    componentDidMount() {
       this.request()
        
    }
    request(){
        var that = this;
        React.api.request({
            url: "https://way.jd.com/showapi/wbxh?time=2015-07-10&page=1&maxResult=20&showapi_sign=bd0592992b4d4050bfc927fe7a4db9f3&appkey=0cde525d5438e957c3051eefeed70f6d ",
            success: function(res) {
                that.setState({
                    res:res.data.result.showapi_res_body.contentlist
                })
               
            }
        });
    }
    render() {
        return (
            <div class='page'>
                <Joy res={this.state.res}/>
            </div>
        );
    }
}

export default P;