import React from 'react';
import PostComment from './postComment'


class Guestbook extends React.Component {
    constructor (props) {
        super(props);
    }

    state = {

    };

    render () {
        return (
            <div id="guestbookList">
                <div className="guestbook">
                    <div className="userInfo clearfix">
                        <img className="headImg pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504255275912&di=531fae3d1dd721ae3c9ab765b98edc1b&imgtype=0&src=http%3A%2F%2Fv1.qzone.cc%2Favatar%2F201310%2F12%2F15%2F42%2F5258fd6f0db4b914.jpg%2521200x200.jpg" alt=""/>
                        <div className="nickName pull-left">哈哈哈</div>
                        <div className="reply pull-left hidden"><span>回复</span>你你你</div>
                        <div className="commentTime pull-right">一天前</div>
                    </div>
                    <div className="comment">
                        哈哈哈啊哈 你说啥？
                    </div>
                </div>

                <div className="guestbook">
                    <div className="userInfo clearfix">
                        <img className="headImg pull-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504255275912&di=531fae3d1dd721ae3c9ab765b98edc1b&imgtype=0&src=http%3A%2F%2Fv1.qzone.cc%2Favatar%2F201310%2F12%2F15%2F42%2F5258fd6f0db4b914.jpg%2521200x200.jpg" alt=""/>
                        <div className="nickName pull-left">哈哈哈</div>
                        <div className="reply pull-left hidden"><span>回复</span>你你你</div>
                        <div className="commentTime pull-right">一天前</div>
                    </div>
                    <div className="comment">
                        哈哈哈啊哈 你说啥？
                    </div>
                </div>

                <PostComment/>
            </div>
        )
    }
}

export default Guestbook

