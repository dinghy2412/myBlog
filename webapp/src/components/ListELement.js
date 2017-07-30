/**
 * Created by songguo on 2017/7/13.
 */
import React from 'react';
import {Link} from 'react-router-dom'

class ListElement extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.listCategories.map(function (ele) {
                        return <li key={ele.text}><Link to={`/${ele.link}`}>{ele.text}</Link></li>;
                    })
                }
            </ul>
        );
    }
}
export default ListElement
