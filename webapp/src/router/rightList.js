/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import ArticlePreview from '../components/articlePreview'

class RightList extends React.Component {
    constructor (props) {
        super(props);

    }

    componentDidMount(nextProps){
        // var path = nextProps.match.params.path;
        this.loadlists()
    }
    loadlists () {
        $.ajax({
            url : '/api/v1/articleList',
            method : "GET",
            success : function (res) {
                if (res.code === "0") {
                    this.setState({
                        article : res.result
                    });
                }

            }.bind(this)
        })
    }

    state = {
        article : [],
    };

    render () {
        return (
            <div className="rightList col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
                <div style={{fontSize: '50px'}}>Welcome to MrDIng's site</div>
                <ArticlePreview article={this.state.article}/>
            </div>
        );
    }
}

export default RightList
