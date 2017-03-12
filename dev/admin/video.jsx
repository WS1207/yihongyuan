const React = require('react');
const ReactDOM = require('react-dom');

import {Layout, Menu, Dropdown,Upload, Icon, Modal ,Card,Input} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);


class Cards extends React.Component{
    render(){
        return(
            <Card style={{ width: 240 }} bodyStyle={{ padding:10}}>
                <div className="custom-image">
                    <PicturesWall/>
                </div>
                <div className="custom-card">
                    <h3>地址：</h3>
                    <Input placeholder="Basic usage" />
                </div>
            </Card>
        )
    }
}


class PicturesWall extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };

        this.handleCancel=this.handleCancel.bind(this);
        this.handlePreview=this.handlePreview.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }


    handleCancel(){
        this.setState((ps)=>({ previewVisible: false }))
    }

    handlePreview(file){
        this.setState((ps)=>({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        }));
    }

    handleChange({ fileList }){
        this.setState((ps)=>({ fileList :fileList}));
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="/upload.do"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
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
                                <Cards/>
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