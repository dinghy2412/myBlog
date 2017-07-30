/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import ListElement from '../components/ListELement'
import BloggerName from '../components/BloggerName'
import Label from '../components/Label'

class LeftList extends React.Component {
    constructor (props) {
        super(props);
        var that = this;
        $.ajax({
            url : "/json/leftList.json",
            method : "GET",
            success : function (res) {
                var listCategories = that.state.listCategories;
                res.forEach(function (ele) {
                    listCategories.push(ele)
                });
                that.setState({
                    listCategories : listCategories
                })
            }
        })
    };

    state = {
        listCategories : [],
        bloggerInfo : {
            name : "MrDing",
            motto : "不要仰望别人，自己亦是风景。"
        },
        labelArr : [
            {
                text : "日记",
                link : "1"
            },
            {
                text : "互联网",
                link : "2"
            },
            {
                text : "网络",
                link : "3"
            },
            {
                text : "评论",
                link : "4"
            },
            {
                text : "游记",
                link : "5"
            },
            {
                text : "小说",
                link : "6"
            },
            {
                text : "观感",
                link : "7"
            },
            {
                text : "心灵鸡汤",
                link : "8"
            }
        ],
        leftListStyle : {}
    };

    render () {
        return (
                <div className='leftList col-sm-4 col-md-4 col-lg-4' style={this.state.leftListStyle}>
                    <BloggerName bloggerInfo={this.state.bloggerInfo}/>
                    <ListElement listCategories={this.state.listCategories}/>
                    <Label labelArr={this.state.labelArr}/>
                </div>
        );
    };

    componentDidMount () {
        setTimeout(function () {
            var leftListHeight = document.getElementsByClassName("leftList")[0].offsetHeight, //左侧列表高度
                wInnerH        = window.innerHeight;                                          //屏幕列表高度
            if (leftListHeight > wInnerH) {
                window.onscroll = function () {
                    var wScrollY = window.scrollY;
                    if (wScrollY >= leftListHeight - wInnerH) {
                        this.setState({
                            leftListStyle : {
                                position : "fixed",
                                bottom : "0"
                            }
                        })
                    } else {
                        this.setState({
                            leftListStyle : {}
                        })
                    }
                }.bind(this)
            } else {
                this.setState({
                    leftListStyle : {
                        position : "fixed"
                    }
                })
            }


        }.bind(this))
    }
}

export default LeftList
