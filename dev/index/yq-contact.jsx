const React = require("react")
const ReactDOM = require("react-dom");
const common=require("./common.jsx");
class Xiang extends React.Component {
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        var data = {name: this.name.value, phone: this.phone.value, email: this.email.value, content: this.message.value};
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=> {
            if (data !== 'err') {
                alert('发送成功');
            }
        })
    }
    render() {
        return (
            <div>
                <div className="my_xiangbox">
                    <div className="xiang">
                        <div className="zi">
                            <h1>我们已经准备好了</h1>
                            <h1>可以帮您解决您的任何疑问</h1>
                            <h1>您的到来是我们莫大的荣幸，更多惊喜就在这里</h1>
                            <h1>期待您的到来……</h1>
                        </div>
                        <div className="tu"></div>
                        <div className="zuo"></div>
                        <div className="zhongzi"></div>
                        <div className="you">
                            <div className="shang">
                                <h1>山西省／太原市／尖草坪区／不锈钢产业园 </h1>
                                <h1>丰源路／B区／15号</h1>
                            </div>
                            <div className="zhong">
                                <h1>foodfoodopex@163.com </h1>
                                <h1>foodopex.com</h1>
                            </div>
                            <div className="xia">
                                <h1>010-1234567  /  010-9876543    </h1>
                                <h1>13495647389</h1>
                            </div>
                        </div>
                        <div className="di">
                            <div id="mapdynamic"></div>
                        </div>
                        <div className="lan"></div>
                        <div className="youzi"></div>
                        <div className="zuozi">
                            <h1>我知道你已经准备好了</h1>
                            <h1>还差什么，请告诉我，我会尽力好您需要的一切</h1>
                        </div>
                    </div>
                    <form action="" method="post">
                        <div className="xia">
                            <div className="zuo">
                                <input type="text" ref={(el)=>{this.name=el}} placeholder="NAME" name="name"/>
                                <img src="/images/contact/my_xiang_0080.png" alt="" />
                            </div>
                            <div className="zhong">
                                <input type="text" ref={(el)=>{this.phone=el}} placeholder="PHONE" name="phone"/>
                                <img src="/images/contact/my_xiang_0080.png" alt=""/>
                            </div>
                            <div className="you">
                                <input type="text" placeholder="EMAIL" ref={(el)=>{this.email=el}} name="email"/>
                                <img src="/images/contact/my_xiang_0080.png" alt=""/>
                            </div>
                            <div className="zhongxia">
                                <textarea defaultValue="请输入内容。。。" ref={(el)=>{this.message=el}} name="message"></textarea>
                            </div>
                            <div className="fa"  onClick={this.submit}>
                                <a href="javascript:;" >发送</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
class Contact extends React.Component{
    render(){
        return(
            <div>
                <common.st_Header data={this.props.header}/>
                <div className="banner">
                    <common.w_banner/>
                </div>
                <common.w_btn/>
                <Xiang/>
                <common.st_Footer/>
            </div>
        )
    }
}

const data=[
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];
ReactDOM.render(<Contact header={data}/>, document.getElementById("tab"));

