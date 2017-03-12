const React = require('react');
const ReactDOM = require('react-dom');
import {Layout, Menu, Breadcrumb, Icon, Dropdown, Upload, Button} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/admin/page">退出</a>
        </Menu.Item>
    </Menu>
);

class AppNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const urlInfo = location.pathname.split('/');
        urlInfo.shift();
        const openKeys = [urlInfo.slice(0, 2).join('/')];
        if (location.pathname.indexOf('/admin/paperCut') !== -1) {
            var selectKeys = [urlInfo.slice(0, 2).join('/')];
        } else {
            var selectKeys = [urlInfo.slice(0, urlInfo.length).join('/')];
        }
        console.log(openKeys, selectKeys);
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
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200}
                               style={{background: '#fff'}}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={openKeys}
                                defaultOpenKeys={selectKeys}
                                style={{height: '100%'}}
                            >
                                <SubMenu
                                    key="admin/manage"
                                    title={<span><Icon type="user"/><span className="nav-text"><a href=""></a>管理员</span></span>}
                                >
                                    <Menu.Item key="admin/manage"><a href="/admin/manage">管理员信息</a></Menu.Item>
                                    <Menu.Item key="admin/manage/password"><a href="/admin/manage/password">修改密码</a></Menu.Item>
                                </SubMenu>

                                <SubMenu
                                    key="admin/culture"
                                    title={<span><Icon type="team"/><span className="nav-text">晋韵文化</span></span>}
                                >
                                    <Menu.Item key="admin/culture/heading"><a href="/admin/culture">标题管理</a></Menu.Item>
                                    <Menu.Item key="admin/culture/essay"><a href="/admin/culture/eassy">文章管理</a></Menu.Item>

                                </SubMenu>
                                <SubMenu className="delete" key="admin/paperCut"
                                         title={<span style={{fontFamily: ''}}><Icon type="pushpin-o"/><a href="/admin/paperCut" style={{color:'rgba(0,0,0,.65)'}}>剪纸文化</a></span>}>
                                </SubMenu>
                                <SubMenu key="admin/contact" title={<span><Icon type="phone"/>联系我们</span>}>
                                    <Menu.Item key="admin/contact/message"><a href="/admin/contact">留言管理</a></Menu.Item>
                                    <Menu.Item key="admin/contact/location"><a href="/admin/contact/location"></a>地址管理</Menu.Item>
                                </SubMenu>
                                <SubMenu key="admin/tour" title={<span><Icon type="camera-o"/>旅游产品</span>}>
                                    <Menu.Item key="admin/tour/video"><a href="/admin/tour">视频管理</a></Menu.Item>
                                    <Menu.Item key="admin/tour/products"><a href="/admin/tour/products">产品管理</a></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            {this.props.children}
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
exports.AppNav = AppNav;


