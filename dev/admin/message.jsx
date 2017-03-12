const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');

import {Layout, Menu, Icon, Dropdown, Input, Row, Col, Progress, Button, notification} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);


class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.emitEmpty = this.emitEmpty.bind(this)
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        this.setState({userName: e.target.value});
    }

    render() {
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="Enter your Name"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}
class You extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            you: '',
        };
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.emitEmpty = this.emitEmpty.bind(this)

    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({you: ''});
    }

    onChangeUserName(e) {
        this.setState({you: e.target.value});
    }

    render() {
        const {you} = this.state;
        const suffix = you ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="Enter your Email"
                prefix={<Icon type="mail"/>}
                suffix={suffix}
                value={you}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}
class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
        };
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.emitEmpty = this.emitEmpty.bind(this)

    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({phone: ''});
    }

    onChangeUserName(e) {
        this.setState({phone: e.target.value});
    }

    render() {
        const {phone} = this.state;
        const suffix = phone ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="Enter your Phone"
                prefix={<Icon type="phone"/>}
                suffix={suffix}
                value={phone}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}
class Qu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qu: '',
        };
        this.onChangeUserName = this.onChangeUserName.bind(this)

    }

    onChangeUserName(e) {
        this.setState({qu: e.target.value});
    }

    render() {
        const {qu} = this.state;
        const suffix = qu ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                style={{marginTop: "20px"}}
                type="textarea"
                placeholder="Enter your LiuYan"
                suffix={suffix}
                value={qu}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}


const openNotificationWithIcon = (type) => {
    notification.config({
        placement: 'topRight',
        top: 50,
        duration: 0,
    });
    notification[type]({
        description: '成功',
    });

};

class Liu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }

    render() {
        return (
            <div style={{width: 840}}>
                <Progress percent={50} status="active" style={{margin: "20px 0"}}/>
                <Row gutter={24}>
                    <Col span={12}>
                        <Row gutter={3}>
                            <Col span={8}><Name/></Col>
                            <Col span={8}><Phone /></Col>
                            <Col span={8}><You /></Col>
                        </Row>
                        <Row gutter={3}>
                            <Col span={24}><Qu /></Col>
                        </Row>
                        <Button onClick={() => openNotificationWithIcon('success')} type="primary"
                                style={{margin: "20px 140px "}}>删除该条留言区</Button>
                    </Col>
                    <Col span={12}>
                        <Row gutter={3}>
                            <Col span={8}><Name/></Col>
                            <Col span={8}><Phone /></Col>
                            <Col span={8}><You /></Col>
                        </Row>
                        <Row gutter={3}>
                            <Col span={24}><Qu /></Col>
                        </Row>
                        <Button onClick={() => openNotificationWithIcon('success')} type="primary"
                                style={{margin: "20px 140px "}}>删除该条留言区</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <Liu/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));