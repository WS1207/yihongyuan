const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');

<<<<<<< HEAD
import {Switch,Layout, Icon,Breadcrumb, Row, Col, Upload,Dropdown, message,Card, Button, Input} from 'antd';
=======
import {Form,Switch,Layout,Menu, Icon,Breadcrumb, Row, Col, Upload,Dropdown, message,Card, Button, Input} from 'antd';
>>>>>>> 629398b2e31a59908d1ed6f9c2a8055c1201e919
const { Header, Content, Footer, Sider} = Layout;
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
                name="file"
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
class Cards extends React.Component {
    constructor(props){
       super(props);
       this.state={
           content:this.props.data.content,
           url:this.props.data.url,
           title:this.props.data.title,
           id:this.props.data.id
       }
       this.content=this.content.bind(this);
       this.title=this.title.bind(this);
        this.delete=this.delete.bind(this);
    }
    title(e){
        var value=e.currentTarget.value;
        this.setState({
            title:value,
        })
    }
    content(e){
        var value=e.currentTarget.value;
        this.setState({
            content:value,
        })
    }
    delete(){
        var sourceData={
           id:this.props.data.id
        };
        fetch('/admin/paperdel',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(sourceData)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }
    render() {
        return (
            <div>
                    <Card style={{width:270,float:'left',marginLeft:10,marginTop:10}} bodyStyle={{padding: 0}}>
                        <form action="" method="post">
                        <div className="custom-image">
                            <Avatar/>
                        </div>
                            <div className="img">
                                <img src={this.state.url} style={{width:100,height:100
                                }} />
                            </div>
                        <div className="custom-card" style={{marginTop:-90}}>
                            <h3 className="name" style={{marginTop:20}}>标题:</h3>
                            <Input type="text" placeholder="About the designer" onChange={this.title} value={this.state.title}/>
                            <h3 className="describe" style={{marginTop:20}}>描述:</h3>
                            <Input type="textarea" placeholder="About the designer" onChange={this.content} value={this.state.content}/>
                            <h3 className="describe" style={{marginTop:20}}>是否设为推荐:</h3>
                            <Switch defaultChecked={false} onChange={onChange} style={{marginTop:10}} />
                        </div>
                        <Button className="aa delete ant-btn ant-btn-primary"  type="button" onClick={()=>{this.delete()}}>删除</Button>
                        </form>
                    </Card>
            </div>

        )
    }
}
//剪纸文化：标题，内容，图片上传修改，设置推荐位
class Rows extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.add=this.add.bind(this);
    }
    componentDidMount(){
        fetch('/admin/paperCon',{
            method:'post',
            credentials: 'same-origin'

        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            this.setState({
                data:data
            })

        })
    }
    add(){
        var sourceData={
            title:'',
            content:'',
            url:'',
            rec:''
        };
        fetch('/admin/add',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(sourceData)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }
    render() {
        var sourceData=this.state.data;
        var rows=sourceData.map((v,i)=>{
            return(
                <Cards data={v} key={i} id={v.id}/>
            )
        })
        return (
            <div>
                <div>
                    <Button className="bb editable-add-btn ant-btn ant-btn-primary" type="button" onClick={()=>{this.add()}}>添加</Button>
                </div>
                <Row>
                    {rows}
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
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));