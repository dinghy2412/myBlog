/**
 * Created by songguo on 2017/7/14.
 */
import React from 'react';

class BloggerName extends React.Component{
    render() {
        return (
            <div>
                <h1 className="bloggerName">{this.props.bloggerInfo.name}</h1>
                <p className="bloggerMotto">{this.props.bloggerInfo.motto}</p>
            </div>
        );
    }
}

export default BloggerName
