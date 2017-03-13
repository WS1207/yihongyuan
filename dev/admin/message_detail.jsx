const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');

class PageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '稍后.....'
        }
    }
    componentDidMount() {
        var arr = location.pathname.split('/');
        var id = arr[arr.length - 1];
        fetch(`/admin/contact/message/messagedetail/${id}`, {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            console.log(data)
            this.setState({
                content: data[0].content
            });
        });
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.content}}>
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <PageDetail/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));
