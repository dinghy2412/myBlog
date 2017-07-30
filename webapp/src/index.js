import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

require('normalize.css/normalize.css');   //清除默认样式
require('styles/PC.scss');                //公共样式
require('styles/mobile.scss');                //公共样式

// Render the main component into the dom

ReactDOM.render((
    <App />
), document.getElementById('app'));

// $(function () {
//     $(window).scroll(function () {
//         console.log($(window).scrollTop())
//     })
//
// })
// window.onscroll = function () {
//     console.log(window.scrollY)
// }

// var leftList = document.getElementsByClassName("leftList")[0];
//
// var leftListHeight = document.getElementsByClassName("leftList")[0].offsetHeight,
//     wInnerH        = window.innerHeight;
// window.onscroll = function () {
//     var wScrollY = window.scrollY;
//     if (wScrollY > leftListHeight - wInnerH + 10) {
//         leftList
//         this.setState({
//             leftListClass : "leftListFix",
//             leftListStyle : {
//                 position
//                 top : wScrollY + wInnerH - leftListHeight + "px"
//             }
//         })
//     } else {
//         this.setState({
//             leftListClass : "",
//             leftListStyle : {}
//         })
//     }
// }.bind(this)
