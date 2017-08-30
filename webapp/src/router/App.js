/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashHistory} from 'react-router-dom'
import ArticleBox from '../router/articleBox'
import Header from '../router/header'
import Home from '../router/home'
import AboutMe from '../router/aboutMe'

class App extends React.Component {
    render () {
        return (
            <Router history={HashHistory}>
                <div id="app">
                    <Route path="/" component={Header}></Route>

                    <Switch>
                        <Route exact strict path="/" component={Home}></Route>
                        <Route exact strict path="/AboutMe" component={AboutMe}></Route>
                        <Route path="/:path" component={ArticleBox}></Route>
                    </Switch>
                </div>
            </Router>
        );
    };
};


export default App;
