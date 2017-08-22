/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashHistory} from 'react-router-dom'
import LeftList   from '../router/leftList'
import RightList from '../router/rightList'
import Header from '../router/header'
import Home from '../router/home'

class App extends React.Component {
    render () {
        return (
            <Router history={HashHistory}>
                <div>
                    <Route path="/" component={Header}></Route>
                    <div id="main" className="clearfix">
                        <Route exact strict path="/" component={Home}></Route>
                        <Switch>
                            <Route path="/:path" component={LeftList}></Route>
                            {/*<Route path="/" component={LeftList}></Route>*/}
                        </Switch>
                        {/*<Route component={RightList}/>*/}
                    </div>
                </div>
            </Router>
        );
    };
};


export default App;
