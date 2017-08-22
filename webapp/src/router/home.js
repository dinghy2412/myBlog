import React from 'react';

class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section id="banner">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src="http://7xnqn3.com2.z0.glb.qiniucdn.com/b00ec83c36bd4fef8e8df83af230e730?imageView2/0/w/640"
                            alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://7xnqn3.com2.z0.glb.qiniucdn.com/510bf481f80d485f8d95b3e9efdf32ce?imageView2/0/w/640"
                            alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://7xnqn3.com2.z0.glb.qiniucdn.com/3943f9311fb247db87701ce8de04d5d6?imageView2/0/w/640"
                            alt=""/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }

    componentDidMount () {
        new Swiper('#banner', {
            autoplay : 5000,
            loop : true,
            grabCursor : true,
            effect : 'slide',
            pagination : '.swiper-pagination',
            paginationClickable :true
        });
    }
}

export default Home
