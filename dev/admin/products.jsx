const React = require('react');
const ReactDOM = require('react-dom');
const o = require('./wang.jsx');
const nav = require('./common.jsx');
function aa(x) {
    console.log(x)
}
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <o.WangEditor url={'/admin/txt'} save={aa}/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));