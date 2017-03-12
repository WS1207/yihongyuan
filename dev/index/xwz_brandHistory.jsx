const React=require('react');
const ReactDom=require('react-dom');
const Common=require('./common.jsx');
const STheader=require('./st_header.jsx');
const STfooter=require('./st_footer.jsx');
class Xwz_historyCon extends React.Component{
    render(){
        return(
            <div className="xwz_con">
            </div>
        )
    }
}
class XwzHistory extends React.Component{
    render(){
        return(
            <div>
                <Common.Xwz_Nav xwz_data={xwz_data}/>
                <Common.Xwz_title/>
            </div>
        )
    }
}
const stdata=[
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];
const xwz_data=[
    {id:1,name:'品牌历史',Eng:'BRAND HISTORY'},
    {id:2,name:'团队介绍',Eng:'TEAM INTRODUCTION'},
    {id:3,name:'企业文化',Eng:'CORPORATE CULTURE'},
    {id:4,name:'企业荣誉',Eng:'ENTERPRISE HONOR'},
    {id:5,name:'品牌分支',Eng:'BRAND BRANCH'}
];
const Wz =(
    <div className="">
        <STheader.Header data={stdata}/>
        <Common.w_btn/>
        <div className="xwzbrand">
            <XwzHistory/>
        </div>
        <Common.st_Footer/>
    </div>
);
ReactDom.render(Wz,document.getElementById('xwzbrand'));