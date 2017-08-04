/**
 * Created by songguo on 2017/7/11.
 */

import React from 'react';
import ArticlePreview from '../components/articlePreview'

class LeftList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            article : [],
            path : this.props.match.params.path
        };
        console.log(this)
    }

    loadlists (menuType) {
        let url = menuType ? `/api/v1/articleList?menuType=${menuType}` : '/api/v1/articleList';
        this.setState({
            loading : true
        });
        fetch(url).then((res) => {
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
        let HTMLtags;
        if (this.state.loading) {
            HTMLtags = <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        } else {
            if (this.state.article.length) {

                HTMLtags = <ArticlePreview article={this.state.article}/>
            } else {
                HTMLtags = <div>暂无内容</div>
            }
        }
        return (
            <div id="leftList" className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                {HTMLtags}
            </div>
        );
    }

    componentDidMount () {
        this.loadlists(this.props.match.params.path);
    }

    componentDidUpdate () {
        if (this.state.path !== this.props.match.params.path) {
            this.loadlists(this.props.match.params.path);
            this.setState({
                path : this.props.match.params.path
            });

            window.scrollTo(0, 0)
        }
    }
}

export default LeftList
