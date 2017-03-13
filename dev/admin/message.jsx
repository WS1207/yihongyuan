const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');

import {Table} from 'antd';

const columns = [{
    key: 'name',
    title: '姓名',
    dataIndex: 'name'
    // render: text => <a href="#">{text}</a>,
}, {
    key: 'phone',
    title: '电话',
    dataIndex: 'phone',
},  {
    key: 'email',
    title: '邮箱',
    dataIndex: 'email',
}, {
    key: 'content',
    title: '内容',
    dataIndex: 'content',
    render: (text, record)=><a href={`/admin/contact/message/${record.id}`}>{text}</a>
}, {
    key: 'delete',
    title: '删除',
    render: record=><a href={`/admin/contact/message/delete/${record.id}`}>X</a>
}];

class MessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch('/admin/contact/message/name', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                data: data
            });
        });
    }
    render() {
        return (
            <div>
                <Table pagination={{pageSize:5}} rowKey={record=>record.id} columns={columns}
                       dataSource={this.state.data}/>
            </div>
        );
    }
}
// rowSelection object indicates the need for row selection
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <MessagePage/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));