import React from 'react';
import Footer from '../router/footer'



class AboutMe extends React.Component {
    constructor (props) {
        super(props)

    }

    render () {
        return (
            <section id="aboutMe">
                <div className="infoBox">
                    <div className="wxBox">
                        <img className="wxIcon" src="//img.dinghyu.com/weixin2.png" alt="微信icon"/>
                        <div>Add WECHAT TO CHAT</div>
                        <img src="//img.dinghyu.com/WechatIMG599.jpeg" alt="" className="wxQrCode"/>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}

export default AboutMe
