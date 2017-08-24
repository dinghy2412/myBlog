/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import ListElement from '../components/ListELement'
import BloggerName from '../components/BloggerName'
import Label from '../components/Label'

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
                <ListElement listCategories={this.state.listCategories}/>
            </aside>
        );
    };

    componentDidMount() {

    }
}

export default RightList
