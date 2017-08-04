/**
 * Created by songguo on 2017/7/15.
 */
import React from 'react';

class ArticlePreview extends React.Component {
    constructor (props) {
        super(props);
        this.hideBtnClick = this.hideBtnClick.bind(this);
        this.showBtnClick = this.showBtnClick.bind(this);
    }

    hideBtnClick (id) {

        var article = this.state.article;
        article[id].style = {
            height : "auto",
            overflow : "inherit"
        };
        article[id].showAllFlag = true;
        this.setState({
            article : article
        })
    }

    showBtnClick (id) {

        var article = this.state.article;
        article[id].style = {
            height : '500px',
            overflow : "hidden"
        };
        article[id].showAllFlag = false;

        this.setState({
            article : article
        })
    }

    componentWillReceiveProps (nextProps) {
        var article = nextProps.article;
        this.setState({
            article : article
        })
    }

    componentDidMount (nextProps) {
        var article = this.props.article;
        this.setState({
            article : article
        })
    }

    state = {
        article : []
    };

    render () {
        return <div>
            {
                this.state.article.map((ele, id) => {

                    return <div className="articleBox clearfix" key={ele.id}>
                        <h1>{ele.title}</h1>
                        <div dangerouslySetInnerHTML={{
                            __html : ele.HTML
                        }} style={ele.style ? ele.style : {height : '300px', overflow : "hidden"}}></div>
                        <a className={ele.showAllFlag ? 'hidden' : 'show'} onClick={this.hideBtnClick.bind(null, id)}>Read
                            All</a>
                        <a className={ele.showAllFlag ? 'show' : 'hidden'} onClick={this.showBtnClick.bind(null, id)}>Pack
                            up</a>
                    </div>
                })
            }
        </div>
    }
}

export default ArticlePreview
