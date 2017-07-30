/**
 * Created by songguo on 2017/7/14.
 */
import React from 'react';

class Label extends React.Component {
    render() {
        return <div className="labelBox">
            <h4>TAGS</h4>
            {
                this.props.labelArr.map(function (ele) {
                    // var random = 12 + Math.random() * 24;
                    var random = 12;
                    return <a key={ele.link} style={{fontSize : random + "px"}}>{ele.text}</a>
                })
            }
        </div>
    }
}

export default Label
