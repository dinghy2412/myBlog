/**
 * Created by songguo on 2017/7/31.
 */
import React from 'react';

class Header extends React.Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            <header>
                <div className="headerBox clearfix">
                    <div className="welLan">不要仰望别人，自己亦是风景...</div>
                    <iframe frameBorder="no" marginWidth="0" marginHeight="0" width='298' height='52' src="//music.163.com/outchain/player?type=2&id=31165295&auto=0&height=32"></iframe>
                </div>
            </header>
        )
    }
}

export default Header
