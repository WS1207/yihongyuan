const React = require('react');
const ReactDOM = require('react-dom');

import {Layout, Menu, Icon, Dropdown, } from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/login">退出</a>
        </Menu.Item>
    </Menu>
);


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
                                         title={<span><Icon type="environment-o"/><a className="link" href="/admin/location"
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
                                heading
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