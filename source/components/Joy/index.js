import React from '@react';
import './index.scss';
class Joy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.res)
        return (
            <div class="box">
                {this.props.res.map(function(res){
                    return(
                        <div key={res.id}>
                            <h2>{res.title}</h2>
                            <p>{res.text}</p>
                        </div>
                    )
                })

                }
            </div>
        );
    }
}

export default Joy;
