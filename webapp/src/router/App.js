/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashHistory} from 'react-router-dom'
import LeftList   from '../router/leftList'
import RightList from '../router/rightList'
import Header from '../router/header'
import Banner from '../router/banner'

class App extends React.Component {
    render () {
        return (
            <Router history={HashHistory}>
                <div>
                    <Route path="/" component={Header}></Route>
                    <Route exact strict path="/" component={Banner}></Route>
                    <div id="main" className="clearfix">
                        <Switch>
                            <Route path="/:path" component={LeftList}></Route>
                            <Route path="/" component={LeftList}></Route>
                        </Switch>
                        <Route component={RightList}/>
                    </div>
                </div>
            </Router>
        );
    };
};


export default App;
