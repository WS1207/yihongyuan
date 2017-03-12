const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <h1>欢迎来到艺弘缘后台管理系统</h1>
            <p>在这里你可以修改密码，管理文章，图片，赶快点击左边菜单进行体验吧</p>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));



