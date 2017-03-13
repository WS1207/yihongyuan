const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
import {Layout, Dropdown,Upload, Icon, Modal ,Card,Input} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

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
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <Cards/>
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));