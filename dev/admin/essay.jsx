const React = require('react');
const ReactDOM = require('react-dom');

import {Switch,Layout,Menu, Icon,Breadcrumb, Row, Col, Upload,Dropdown, message,Card, Button, Input} from 'antd';
const { Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);

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
                placeholder="Enter your userName"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
            />
        );
    }
}

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(info) {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl}));
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                className="avatar-uploader"
                name="avatar"
                showUploadList={false}
                action="/upload.do"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {
                    imageUrl ?
                        < img src={imageUrl} alt="" className="avatar"/> :
                        <Icon type="plus" className="avatar-uploader-trigger"/>
                }
            </Upload>
        );
    }
}

function onChange(checked) {
    console.log(`switch to ${checked}`);
}
class Cards extends React.Component {
    render() {
        return (
            <div>
                <Button className="bb editable-add-btn ant-btn ant-btn-primary" onClick={this.handleAdd} type="button">添加</Button>
                <Card style={{width: '100%'}} bodyStyle={{padding: 0}}>
                    <div className="custom-image">
                        <Avatar/>
                    </div>
                    <div className="custom-card">
                        <h3 className="name" style={{marginTop:20}}>标题:</h3>
                        <App/>
                        <h3 className="describe" style={{marginTop:20}}>描述:</h3>
                        <Input type="textarea" placeholder="About the designer" autosize/>
                    </div>

                    <Button className="aa delete ant-btn ant-btn-primary" onClick={this.handleDelete} type="button">删除</Button>

                </Card>
            </div>

        )
    }
}
//剪纸文化：标题，内容，图片上传修改，设置推荐位
class Rows extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Cards/>
                    </Col>
                    <Col span={8}>

                    </Col>
                    <Col span={8}>

                    </Col>
                </Row>
            </div>
        )
    }
}
//剪纸文化：标题，内容，图片上传修改，设置推荐位

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
                                <Rows/>
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