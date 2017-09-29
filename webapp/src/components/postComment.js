import React from 'react';

class PostComment extends React.Component {
    constructor (prop) {
        super(prop)
        this.PostComment = this.PostComment.bind(this);
        this.PostCommentName = this.PostCommentName.bind(this);
        this.PostCommentPhoneNum = this.PostCommentPhoneNum.bind(this);
        this.PostCommentOther = this.PostCommentOther.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    state = {
        comment : "",
        name : "",
        PhoneNum : "",
        other : "",
        replyCommentId : ""
    };

    PostComment (event) {
        this.setState({comment: event.target.value});
    }

    PostCommentName (event) {
        this.setState({name: event.target.value});
    }

    PostCommentPhoneNum (event) {
        this.setState({PhoneNum: event.target.value});
    }

    PostCommentOther (event) {
        this.setState({other: event.target.value});
    }

    sendComment () {
        var url = "",
            data = {
                name : this.state.name,
                PhoneNum : this.state.PhoneNum,
                other : this.state.other,
                replyCommentId : this.state.replyCommentId
            };
        console.log(data);
        fetch(url, {
                method : "POST",
                body: JSON.stringify(data)
            }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    if (data.code === "0") {
                        if (Array.isArray(data.result)) {
                            this.setState({
                                article : data.result,
                                loading : false
                            });
                        }
                    }
                })
            }
        });
    }

    render () {
        var comment = this.state.comment,
            name = this.state.name,
            PhoneNum = this.state.PhoneNum,
            other = this.state.other;
        return (
            <div id="PostComment" className="clearfix">
                <div className="title">留个脚印吧...</div>
                <textarea className="comment form-control" name="" id="" cols="30" rows="6" value={comment || ""} onChange={this.PostComment}></textarea>
                <div className="title">Name</div>
                <input type="text" className="name form-control" value={name || ""} onChange={this.PostCommentName}/>
                <div className="title">Phone number</div>
                <input type="number" className="PhoneNum form-control" value={PhoneNum || ""} onChange={this.PostCommentPhoneNum}/>
                <div className="title">Other</div>
                <input type="text" className="other form-control" value={other || ""} onChange={this.PostCommentOther}/>
                <button className="btn btn-primary btn-block" onClick={this.sendComment}>发送</button>
            </div>
        )
    }
}

export default PostComment

