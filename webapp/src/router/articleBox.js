import React from 'react';
import LeftList from '../components/leftList';
import RightList from '../components/rightList';
import Footer from '../router/footer'

class ArticleBox extends React.Component {
    constructor (prop) {
        super(prop)
    }


    render () {
        return (
            <div>
                <section id="main" className="clearfix">
                    <LeftList menuType={this.props.match.params.path}/>
                    <RightList menuType={this.props.match.params.path}/>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default ArticleBox

