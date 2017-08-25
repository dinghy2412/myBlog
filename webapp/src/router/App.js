/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashHistory} from 'react-router-dom'
import LeftList from '../router/leftList'
import RightList from '../router/rightList'
import Header from '../router/header'
import Home from '../router/home'
import Footer from '../router/footer'

class App extends React.Component {
    render () {
        return (
            <Router history={HashHistory}>
                <div id="app">
                    <Route path="/" component={Header}></Route>
                    <Route exact strict path="/" component={Home}></Route>
                    {/*<div id="main" className="clearfix">*/}
                        {/*<Switch>*/}
                            {/*<Route path="/:path" component={LeftList}></Route>*/}
                        {/*</Switch>*/}
                        {/*<Route path="/:path" component={RightList}/>*/}
                    {/*</div>*/}
                    {/*<Route path="/:path" component={Footer}/>*/}
                </div>
            </Router>
        );
    };
};


export default App;
