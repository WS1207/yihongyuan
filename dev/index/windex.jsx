const React = require('react');
const ReactDOM = require('react-dom');
const Common=require('./common.jsx');
class Con extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="conp">
                <p>{this.props.Conli.p}</p>
                <div className="conimg">
                    <img src={this.props.Conli.img1} alt=""/>
                    <img src={this.props.Conli.img5} alt=""/>
                    <img src={this.props.Conli.img6} alt=""/>
                    <p className="p1">{this.props.Conli.p}</p>
                </div>

            </div>
        )
    }
}
class ConItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var rows=[];
        this.props.wzq_data.forEach((v,i)=>{
            rows.push(<Con Conli={v} key={i} />);
        });
        return(
            <div className="ConItem">
                {rows}
            </div>
        )
    }
}
class Right extends React.Component {
    render() {
        return (
            <div className="right">
                <img src={this.props.rightli.img} alt=""/>
                <div className="rp">
                    <div className="rp1">
                        <h5>{this.props.rightli.title}</h5>
                        <p>{this.props.rightli.p}</p>
                        <h5>{this.props.rightli.title2}</h5>
                        <p>{this.props.rightli.t2p}</p>
                    </div>
                    <img src="/images/w7.png" alt="" className="w7img"/>
                </div>

            </div>
        )
    }
}
class RightItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var rows=[];
        this.props.right_data.forEach((v,i)=>{
            rows.push(<Right rightli={v} key={i} />);
        });
        return(
            <div className="rightItem">
                {rows}
            </div>
        )
    }
}
class Con2 extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
           return(
               <div className="conp">
                   <p>{this.props.Con2li.title}</p>
                   <div className="conimg">
                       <img src={this.props.Con2li.img6} alt=""/>
                       <p className="p1">{this.props.Con2li.title}</p>
                   </div>
               </div>
           )
    }
}
class Con2Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var rows=[];
        this.props.wzq_data1.forEach((v,i)=>{
            rows.push(<Con2 Con2li={v} key={i} />);
        });
        return(
            <div className="Con2Item">
                {rows}
            </div>
        )
    }
}
class Scu extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="top">
                    <Common.st_Header data={data}/>
                </div>
                    <Common.w_banner/>
                <Common.w_btn/>
                <div className="con1">
                    <img src="/images/wzq1.png" alt=""/>
                    <Common.w_line/>
                    <ConItem wzq_data={wzq_data}/>
                    <RightItem right_data={right_data}/>
                </div>
                <div className="con1">
                    <Con2Item wzq_data1={wzq_data1}/>
                </div>
                <Common.page data={data1}/>
                <div className="footer">
                    <Common.st_Footer/>
                </div>
            </div>
        )
    }
}

const wzq_data1=[
    {id:1,title:'西方古代时期的雕塑在很长的一段时间里主要是为图腾、魔法和宗教服务。在美洲，墨西哥的普勃洛州的特华坎河谷是伟大的中美洲文化的诞生地，而后在墨西哥出现了当时最先进的古典前期文化，即奥尔麦克文化。它被喻为墨西哥文明的前身。公元前300年左右玛雅文化开始出现并发展，它继承了中美洲文化传统，发展了大型雕塑如神庙等，14世纪上半叶，墨西哥土著阿兹台克人统治了墨西哥河谷，建立了君主专制王国，形成了阿兹台克文化。16世纪时，西班牙人征服了阿兹台克王朝，接着向南方掠夺并统治了印加文化的发源地——秘鲁。在非洲文化中，雕塑是最重要的美术形式之一。黑非洲的浮雕和圆雕大都是木制的，但也有石材、金属和陶瓷。它大致分为两类：一类是民间美术，为宗教、魔法服务，也有表现自身生活的作品；另一类是为统治阶级服务的宫廷美术。这两类雕塑都内容丰富、形式多样，富有装饰性，富有表现雕塑雕塑力视觉冲击力强至今黑非洲雕塑仍具有独特魅力。古埃及文化是非洲文化长河中一颗灿烂的星星。古埃及雕刻是雕塑与建筑完美结合的艺术典范，具有历史性纪念碑似的宏伟、博大和非常高的艺术成就。',img6:'/images/w_con2_06.png'}
];
const wzq_data=[
    {id:1,p:'于现代生活的急剧变化和快节奏，以及杂乱无章的事物，人们要求在心理上接纳一种单纯的、简洁的艺术形式。另一种是立体派的雕塑，创立人是毕加索，但代表人物是乌克兰出生的亚历山大·阿基本科，他的作品特点是把坚实的平面与挖空的开放的体积对比形成一种独特的节奏和动感，并用凹陷的结构取代原本坚实的甚至凸出的结构使空间流动起来，并探索了正负空间的转换。其次从实践层面来讲，在近代，尽管中国雕塑工匠与西方雕塑家在创作形式上极为相似，但是两者肩负的社会责任大相径庭。在中国，雕塑人员仍然是传统分工中的一员，其主要职责是为寺庙建筑塑像、为建筑雕刻石头。一方面，他们没有独立创作的自由空间；另一方面，从表现对象、作品所处空间等方面来讲，他们的作品缺少介入社会现实的能力。而在西方，在“工作室”自由创作的雕塑能借助作品表达自己对社会的观察作品力量丝毫不弱于同时代的画家。接受各方定件、从中获利的西方雕塑，其作品则可以进入各种现代社会的公共空间，比如广场、街头、公园，其作品自然会引起公众关注这也是西方雕塑与中国雕塑有何区别的另一个原因。',img1:'/images/w_03.png',img5:'/images/111111.png',img6:'/images/22222.png'}
];
const right_data=[
    {id:1,img:'/images/w6.png',title:'石雕历史源流',p:'在中国历史悠久。在漫长的旧、新石器时代，石器加工是岭南原始先民谋生的手段。在珠江口的香港、澳门、珠海发现多处岩刻，以复杂的抽象图案为主，采用凿刻的技法，尤以珠海南水镇高栏岛岩刻为巨，文凿刻，线条清晰，从复杂的线条中还可辨认出人物和船刻。',title2:'石雕制作方法',t2p:'石雕的制作方法多种多样，根据石料性质和雕刻者的习惯各不相同，大致可分为二种：一是传统的方法，构思、构图造型以及打石雕刻都是由个人独自完成。二是采用新的工艺即先做好泥塑，翻成石膏像，然后将石膏像（模特儿）作为依据，依靠点形仪，再刻成石雕像。'}
];
const data=[
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];
const data1 = [
    {id: '01'},
    {id: '02'},
    {id: '03'},
    {id: '04'},
    {id: '05'}
]

ReactDOM.render(<Scu/>, document.getElementById('page'));

