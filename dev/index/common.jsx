const React = require('react');
const ReactDOM = require('react-dom');
class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }

    render() {
        var list = this.props.data;

        return (
            <div className="yq_tab_module">
                <div className="yq_tab_bgmap">
                </div>
                <div className="yq_tab_nav">
                    <ul>
                        {list.map((v, i) => <li className={(i===this.state.index)?'active':''} onClick={()=>{ this.setState({index: i})}} key={i}>{v.title}</li>)}
                    </ul>
                </div>
                <div className="yq_tab_frame">
                    {list.map((v,i)=><div className="yq_tab_center" style={{display: (i === this.state.index) ? "block" : "none"}} key={i}>
                        <img src={v.center} alt=""/></div>)}
                </div>
                <div className="yq-tab-text">

                </div>
            </div>
        )

    }
}
//banner
class Banner extends  React.Component{
    render(){
        return(
            <div className="banner">
                <img src="" alt="" className="img"/>
            </div>
        )
    }
}
//面包屑
class Btn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="btn">
                <ul>
                    <a href="javascript:;" className="a"><img src="/images/w.png" alt="" className="c"/> 首页</a>

                    <a href="javascript:;" className="a"><img src="/images/gt.png" alt="" className="gt"/><img src="/images/w.png" alt="" className="b"/>园林雕塑</a>

                    <a href="javascript:;" className="a"><img src="/images/gt.png" alt="" className="gt"/><img src="/images/b.png" alt="" className="b"/>21世纪的雕塑艺术</a>
                </ul>
            </div>
        )
    }
}
//分页小组件
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
    };
        this.click = this.click.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }
    click(i){
        this.setState((ps)=>({
            index:i
        }));
    }
    prev() {
        this.setState((ps)=>({index: (ps.index - 1 <= 1) ? 1 : (ps.index - 1)}))
    }
    next() {
        const len = this.props.data.length;
        this.setState((ps)=>({index: (ps.index + 1 >= len) ? (len) : (ps.index + 1)}));
    }
    render() {
        return (
            <div className="page">
                <div className="prev" onClick={this.prev}></div>
                <ul className="rectbox">
                    {this.props.data.map((v, i) =>
                        <li className={`${this.state.index == v.id ? "active" : ""}`} key={i} onClick={()=>{this.click(v.id)}}>
                            <div className="rect">
                                {v.id}
                            </div>
                            <div className="xian">-</div>
                        </li>)
                    }
                </ul>
                <div className="next" onClick={this.next}></div>
            </div>
        )
    }
}
//点赞小组件
class Zan extends React.Component{
    render(){
        return(
            <ul className="click">
                <li className="yes">
                    <div className="click-y"></div>
                    <p><span className="num">999</span>人觉得有用</p>
                </li>
                <li className="no">
                    <div className="click-n"></div>
                    <p><span className="num">999</span>人觉得胡说</p>

                </li>
            </ul>
        )
    }
}
//分割线
class Line extends React.Component {
    render() {
        return (
            <div className="bigline">
                <div className="smallline">
                </div>
            </div>
        )
    }
}
//头部
class Topnav extends React.Component{
    render(){
        //
        return(
            <li className={this.props.isActive?'st_navtitle active':'st_navtitle'} onClick={()=>{this.props.click(this.props.index)}}>
                <a href={this.props.data.href} className="st_titles">{this.props.data.title}</a>
                <img className="st_border" src={this.props.data.img} alt=""/>
            </li>
        )
    }
}
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.click=this.click.bind(this);
    }
    click(i){
        this.setState(()=>({index:i}));
    }
    render(){
        const items=this.props.data.map((v,i)=><Topnav data={v} key={i} index={i+1} isActive={i+1==this.state.index} click={this.click}/>);
        return (
            <div className="st_navbarbox">
                <div className="st_navbar">
                    <div className="st_logo" >
                        <img src="/images/st_navbar-logo.png" alt=""/>
                    </div>
                    <ul className="st_navtitlebox">
                        <li  className={this.state.index==0?'st_navtitle actives':'st_navtitle'}onClick={()=>{this.setState({index:0})}}>
                            <a href="/" className="st_titles" >首页</a>
                            <img className="st_home" src='/images/st_bignav.png' alt=""/>
                        </li>
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}
//底部
class Footer extends React.Component{
    render(){
        return (
            <div className="st_bottombox">
                <div className="st_bottom">
                    <div className="st_bignav">
                        <ul className="st_message">
                            <li>
                                <img src="/images/intnet.png" alt=""/>
                                <p className="st_int">www.yihognyuan.com</p>
                            </li>
                            <li>
                                <img src="/images/address.png" alt=""/>
                                <p>山西省太原市尖草坪区产业园丰源路B区15号</p>
                            </li>
                            <li className="st_phone">
                                <img src="/images/huatong.png" alt=""/>
                                <p>400-123-123 400-234-234</p>
                            </li>
                        </ul>
                        <div className="st_map">

                        </div>
                        <div className="st_copyright">
                            <p>北京市公安局朝阳分局备案编号:110105000501   Copyright © 2006-2016 ZCOOL</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Xwz_li extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <li className="xwz_navli" style={{background:(this.props.isActive?'#10518f':'#fff')}} onClick={()=>{this.props.click(this.props.index)}}>
                <a href="javascript:;" style={{color:(this.props.isActive?'#fff':'#4e4e4e')}} >
                    <b>{this.props.data.name}</b>
                    <i>{this.props.data.Eng}</i>
                </a>
            </li>
        )
    }
}
class Xwz_Nav extends React.Component{
    constructor(props){
        super();
        this.state={
            index:0
        };
        this.click=this.click.bind(this);
    }
    click(i){
        this.setState((ps)=>({index:i}));
    }
    render(){
        const xwz_lis=this.props.xwz_data.map((v,i)=><Xwz_li key={i} index={i} click={this.click} data={v} isActive={i===this.state.index}/>);
        return(
            <div className="xwz_navbox">
                <div className="xwz_navtopbox"></div>
                <ul className="xwz_navbottombox">
                    {xwz_lis}
                </ul>
            </div>
        )
    }
}

class Xwz_title extends React.Component{
    render(){
        return(
            <div className="xwz_titlebox">
                <div className="xwz_first">
                    <span>YIHONG YUAN</span>
                    <i>山西艺弘缘文化传播有限公司</i>
                </div>
                <b>CULTURAL COMMUNICATION</b>
                <p>IN SHAN XI</p>
            </div>
        )
    }
}

class Baidu_map extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}
module.exports={
    zan:Zan,
    tab:Tab,
    page:Page,
    w_line:Line,
    w_btn:Btn,
    w_banner:Banner,
    st_Header:Header,
    st_Footer:Footer,
    Xwz_Nav:Xwz_Nav,
    Xwz_title:Xwz_title,
    baidu_map:Baidu_map
};