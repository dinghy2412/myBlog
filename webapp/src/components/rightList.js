/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import ListElement from './ListELement'
import BloggerName from './BloggerName'
import Label from './Label'

class RightList extends React.Component {
    constructor(props) {
        super(props);
        var that = this;
    }

    componentWillMount() {
        this.setState({
            listCategories: [
                {
                    "text": "Home",
                    "link": ""
                },
                {
                    "text": "All",
                    "link": "All"
                },
                {
                    "text": "Code",
                    "link": "Code"
                },
                {
                    "text": "Life",
                    "link": "Life"
                },
                {
                    "text": "Guestbook",
                    "link": "Guestbook"
                },
                {
                    "text": "AboutMe",
                    "link": "AboutMe"
                }
            ]

        })
    }

    state = {
        listCategories : [],
        bloggerInfo : {
            name : "MrDing",
            motto : "不要仰望别人，自己亦是风景。"
        }
    }

    render() {
        return (
            <aside id="rightList" className='col-sm-4 col-md-4 col-lg-' style={this.state.leftListStyle}>
                <BloggerName bloggerInfo={this.state.bloggerInfo}/>
                <ListElement listCategories={this.state.listCategories} menuType={this.props.menuType}/>
            </aside>
        );
    };

    componentDidMount() {

    }
}

export default RightList
