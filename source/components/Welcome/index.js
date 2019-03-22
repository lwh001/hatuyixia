import React from '@react';
import './index.scss';
class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        setTimeout(this.link,2000);
    }
    render() {
        return (
            <div class="box"  >
                <image src={this.props.head}  width="10"  height="10"/>
                <h2 class='welcome-text'>Hello, {this.props.text}</h2>
            </div>
        );
    }
    link(){
        var url = "/pages/joy/index";
        React.api.navigateTo({ url:"/pages/joy/index" });
    }
}

export default Welcome;
