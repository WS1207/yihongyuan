const React = require('react');
const ReactDOM = require('react-dom');

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
                placeholder="地址"
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
                            <Col span={12}><Phone /></Col>
                            <Col span={12}><You /></Col>
                        </Row>
                        <Row gutter={3}>
                            <Col span={24}><Qu /></Col>
                        </Row>
                        <Button onClick={() => openNotificationWithIcon('success')} type="primary"
                                style={{margin: "20px 140px "}}>删除</Button>
                    </Col>

                </Row>

            </div>
        )
    }
}


class Page extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header" style={{fontSize: '20px', color: '#fff'}}>
                    艺弘缘后台管理系统
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#"
                           style={{
                               color: 'rgba(0,0,0,.65)',
                               height: 32,
                               fontSize: '12px',
                               float: 'right',
                               border: '1px solid #000',
                               borderRadius: '3px',
                               lineHeight: '17px',
                               margin: '15px -16px',
                               padding: '7px 16px',
                               background: '#fff'
                           }}>
                            超级管理员 <Icon type="down"/>
                        </a>
                    </Dropdown>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu className="delete" key="sub1"
                                         title={<span><Icon type="user"/><a className="link" href="/admin/manage"
                                                                            style={{color: "rgba(0,0,0,.65)"}}>admin管理员</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub2"
                                         title={<span><Icon type="book"/><a className="link" href="/admin/heading"
                                                                            style={{color: "rgba(0,0,0,.65)"}}>标题管理</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub3"
                                         title={<span><Icon type="file-text"/><a className="link" href="/admin/essay"
                                                                                 style={{color: "rgba(0,0,0,.65)"}}>文章管理</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub4"
                                         title={<span><Icon type="pushpin-o"/><a className="link" href="/admin/paperCut"
                                                                                 style={{color: "rgba(0,0,0,.65)"}}>剪纸文化</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub5"
                                         title={<span><Icon type="message"/><a className="link" href="/admin/message"
                                                                               style={{color: "rgba(0,0,0,.65)"}}>留言管理</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub6"
                                         title={<span><Icon type="environment-o"/><a className="link"
                                                                                     href="/admin/location"
                                                                                     style={{color: "rgba(0,0,0,.65)"}}>地址管理</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub7"
                                         title={<span><Icon type="video-camera"/><a className="link" href="/admin/video"
                                                                                    style={{color: "rgba(0,0,0,.65)"}}>视频管理</a></span>}>
                                </SubMenu>
                                <SubMenu className="delete" key="sub8"
                                         title={<span><Icon type="tags-o"/><a className="link" href="/admin/products"
                                                                              style={{color: "rgba(0,0,0,.65)"}}>产品管理</a></span>}>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <div className="des">
                                <Liu/>
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
ReactDOM.render(<Page/>, document.querySelector('#page'));