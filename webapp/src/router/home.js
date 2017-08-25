import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../router/footer'

class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section id="homeBox">
                <section id="banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="//img.dinghyu.com/banner/panoramic_landscapes-097.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//img.dinghyu.com/banner/panoramic_landscapes-093.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//img.dinghyu.com/banner/panoramic_landscapes-088.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//img.dinghyu.com/banner/panoramic_landscapes-100.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//img.dinghyu.com/banner/panoramic_landscapes-099.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </section>
                <section className="entranceBox">
                    <div className="work">
                        <Link className="centerBox" to="Code">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-daima"></use>
                            </svg>
                            <div className="title">Code</div>
                        </Link>
                    </div>
                    <div className="life">
                        <Link className="centerBox" to="Life">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-shenghuo"></use>
                            </svg>
                            <div className="title">life</div>
                        </Link>
                    </div>
                    <div className="guestbook">
                        <Link className="centerBox" to="Guestbook">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-liuyan"></use>
                            </svg>
                            <div className="title">Guestbook</div>
                        </Link>
                    </div>
                    <div className="aboutMe">
                        <div className="centerBoxLast">
                            <div className="title">
                                About Me
                            </div>
                            <div className="eMail">
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-youjian"></use>
                                </svg>
                                dinghy2412@163.com
                            </div>
                            <div className="phoneNum">
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-shouji"></use>
                                </svg>
                                18519268528
                            </div>
                            <svg className="icon weixin" aria-hidden="true">
                                <use xlinkHref="#icon-wechat"></use>
                            </svg>

                            <svg className="icon weibo" aria-hidden="true">
                                <use xlinkHref="#icon-weibo"></use>
                            </svg>
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>
        )
    }

    componentDidMount () {
            new Swiper('#banner', {
                autoplay : 5000,
                loop : true,
                grabCursor : true,
                effect : 'fade',
                pagination : '.swiper-pagination',
                paginationClickable :true
            });
    }
}

export default Home
