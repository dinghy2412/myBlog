import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

require('normalize.css/normalize.css');   //清除默认样式
require('styles/PC.scss');                //公共样式 PC端
require('styles/mobile.scss');                //公共样式 移动端
require('styles/global.scss');                //公共样式 移动端

ReactDOM.render((
    <App />
), document.getElementById('myApp'));

