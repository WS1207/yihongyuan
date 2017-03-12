const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <h1>修改密码</h1>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));