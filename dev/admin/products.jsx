const React = require('react');
const ReactDOM = require('react-dom');
const o = require('./wang.jsx');
const nav = require('./common.jsx');
import {Switch, Layout, Menu, Icon, Breadcrumb, Row, Col, Upload, Dropdown, message, Card, Button, Input} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
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
                action="/admin/upload"
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
function aa(x) {

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
                        <h3 className="name" style={{marginTop: 20}}>标题:</h3>
                        <App/>
                        <h3 className="describe" style={{marginTop: 20}}>描述:</h3>
                        <Input type="textarea" placeholder="About the designer" autosize/>
                        <h3 className="describe" style={{marginTop: 20}}>是否设为推荐:</h3>
                        <Switch defaultChecked={false} onChange={onChange} style={{marginTop: 10}}/>
                    </div>

                    <Button className="aa delete ant-btn ant-btn-primary" onClick={this.handleDelete}
                            type="button">删除</Button>

                </Card>

                <o.WangEditor url={'/admin/txt'} save={aa}/>
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

ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <Rows/>
            <o.WangEditor url={'/admin/txt/'} save={aa} content={'<h1>aaaaaa</h1>'}/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));