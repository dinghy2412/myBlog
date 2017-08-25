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
                    {/*<svg className="icon weixin" aria-hidden="true">*/}
                        {/*<use xlinkHref="#icon-welcomezhuanhuan"></use>*/}
                    {/*</svg>*/}
                    {/*<iframe frameBorder="no" marginWidth="0" marginHeight="0" width='298' height='52' src="//music.163.com/outchain/player?type=2&id=31165295&auto=0&height=32"></iframe>*/}
                </div>
            </header>
        )
    }
}

export default Header
