/**
 * Created by songguo on 2017/7/11.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashHistory} from 'react-router-dom'
import LeftList from '../router/leftList'
import RightList from '../router/rightList'

class App extends React.Component {
    render () {
        return (
            <Router history={HashHistory}>
                <div id="appBox" className="clearfix">
                    <Route component={LeftList}></Route>

                    <Route path="/:path" component={RightList}/>
                </div>
            </Router>
        );
    };
}

export default App;
