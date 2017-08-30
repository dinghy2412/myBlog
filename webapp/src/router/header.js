/**
 * Created by songguo on 2017/7/31.
 */
import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            <header>
                <div className="headerBox clearfix">
                    <Link to="">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-welcomezhuanhuan"></use>
                        </svg>
                    </Link>
                    {/*<iframe frameBorder="no" marginWidth="0" marginHeight="0" width='298' height='52' src="//music.163.com/outchain/player?type=2&id=31165295&auto=0&height=32"></iframe>*/}
                </div>
            </header>
        )
    }
}

export default Header
