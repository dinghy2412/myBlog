import React from 'react';

class PostComment extends React.Component {
    constructor (prop) {
        super(prop)
        this.PostCommetnName = this.PostCommetnName.bind(this);
        this.PostCommetnEmail = this.PostCommetnEmail.bind(this);
        this.PostCommetnOther = this.PostCommetnOther.bind(this);
    }

    state = {
        name : "",
        email : "",
        other : ""
    };

    PostCommetnName (event) {
        this.setState({PostCommetnName: event.target.value});
    }

    PostCommetnEmail (event) {
        this.setState({PostCommetnEmail: event.target.value});
    }

    PostCommetnOther (event) {
        this.setState({PostCommetnOther: event.target.value});
    }

    sendComment () {
        var url = "",
            data = {

            };
        fetch(url,
            {
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
        var name = this.state.name,
            email = this.state.email,
            other = this.state.other;
        return (
            <div id="PostComment" className="clearfix">
                <div className="title">留个脚印吧...</div>
                <textarea className="comment form-control" name="" id="" cols="30" rows="6"></textarea>
                <div className="title">姓名or昵称</div>
                <input type="text" className="name form-control" value={name || ""} onChange={this.PostCommetnName}/>
                <div className="title">Email</div>
                <input type="email" className="Email form-control" value={email || ""} onChange={this.PostCommetnEmail}/>
                <div className="title">other</div>
                <input type="text" className="other form-control" value={other || ""} onChange={this.PostCommetnOther}/>
                <button className="btn btn-primary btn-block" onClick={this.sendComment}>发送</button>
            </div>
        )
    }
}

export default PostComment

