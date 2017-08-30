/**
 * Created by songguo on 2017/7/13.
 */
import React from 'react';
import {Link} from 'react-router-dom'

class ListElement extends React.Component {
    render () {
        return (
            <ul>
                {
                    this.props.listCategories.map((ele) => {
                        var style = {};
                        if (ele.text === this.props.menuType) {
                            style = {
                                fontSize : "17px",
                                fontWeight : "bold"
                            }
                        }
                        return <li key={ele.text} style={style}><Link to={`/${ele.link}`}>{ele.text}</Link></li>;
                    })
                }
            </ul>
        );
    }
}

export default ListElement
