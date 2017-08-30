import React from 'react';
import Footer from '../router/footer'



class AboutMe extends React.Component {
    constructor (props) {
        super(props);
        if (window.screen.width < 768) {
            this.state.style = {
                backgroundImage: 'url("//img.dinghyu.com/20990657_1368686545127.jpg?imageView2/0/w/750")',
                backgroundSize : 'cover'

            }
        }
    }

    state = {
        style : {
            background: 'url("//img.dinghyu.com/20990657_1368686545127.jpg?imageslim") no-repeat'
        }
    };

    render () {
        return (
            <section id="aboutMe">
                <div className="infoBox" style={this.state.style}>
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
