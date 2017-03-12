const React = require("react")
const ReactDOM = require("react-dom");
const common=require("./common.jsx");

//banner轮播
class Btn extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="btn" style={{background:(this.props.isActive?'blue':'#f9e4cd')}} onClick={()=>{this.props.click(this.props.index)}}/>
        )
    }
}

class Img extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="x_imgs" style={{left:this.props.left}}>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}

class Carousel extends React.Component{
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
        const imgs=this.props.data.map((v,i)=><Img src={v.url} key={i} left={i*1920}/>);
        const btns=this.props.data.map((v,i)=><Btn key={i} index={i} click={this.click} isActive={i===this.state.index}/>);
        return (
            <div className="x_carousel">
                <div className="x_carouselbox" style={{transform:`translate3d(${-1920*this.state.index}px,0,0)`}}>
                    {imgs}
                </div>
                <div className="btns">
                    {btns}
                </div>
            </div>
        )
    }
}
//品牌文化
class Culture extends  React.Component{
    render(){
        return(
            <div className="wenhuabox">
                <div className="wenhua">
                    <div className="zuo">
                        <div className="tu">
                            <img src="/images/home/yq-8888_03.png" alt=""/>
                        </div>
                        <div className="zi">
                            <p>山西艺弘缘文化传播有限公司成立于2010年，坐落于太原市不锈钢产业园丰源路B区15号，是一家针对城市雕塑、景观小品、旅游产品、开发设计，制作与安装为一体的专业性公司。旅游产品有极具山西地域。
                                文化特色的泥塑系列、剪纸系列、软陶系列、陶瓷系列。雕塑工程有大型彩塑、玻璃钢雕塑、不锈钢雕塑、泡沫雕塑等等随着公司管理经验的不断丰富和技术经验的不断提高，业务不断递增，公司大型车间划分为泥塑车间、彩塑车间、剪纸车间和雕塑车间等。</p>
                        </div>
                        <div className="h1">
                            <h1>
                                我们有一流的研发、技术团队，为客户提供一站式服务，增添更多价值
                            </h1>
                        </div>
                        <div className="xiang">
                            <a href="javascript:">
                                <img src="/images/yq-111_11.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="you">
                        <img src="/images/home/yq-0000.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
//选项卡
class Tabbox extends React.Component {
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
class Tab extends React.Component{
    render(){
        return(

            <div>
                <div className="yq-jin-title">
                    <img src="/images/yq-111_03.png" alt=""/>
                </div>
                <div className="yq-jin-text">
                    <p>ltural circle, Shanxi is located in the middle reaches of the Yellow River.Mongolia provinces intersection zone, is the Central Plains farming folk </p>
                    <p>ltural circle, Shanxi is located in the middle reaches of the Yellow River.Mongolia</p>
                </div>
                <Tabbox data={this.props.data}/>
                <div className="yq-chang-title">
                    <h5>Chang Manor</h5>
                    <h1>常家/庄园</h1>
                </div>
                <div className="yq-chang-text">
                    <div className="yq-chang">
                        <p>
                            常家庄园，国家AAAA级旅游景区，是被称为“儒商世家”的榆次东阳镇车辋村常氏家族的宅院建筑群。常家庄园目前开放
                            <br/>
                            为遗存的半条街。其中宅院4公顷、园林8公顷、附属房屋3公顷，庄墙12公里，形成一山、一阁、两轩、四园、五院、六水、九堂、八贴、十三亭、二十五廊、二十七宅院”的格局。
                            <br/>常家庄园占地12余万平方米，是规模最大的晋商大院，也是中国最大的庄园式建筑群
                        </p>
                    </div>
                </div>
                <div className="yq-more">
                    <img src="/images/yq-111_11.png" alt=""/>
                </div>
            </div>
        )
    }
}
//原泥塑文化
class Show extends React.Component{
    render(){
        const people = this.props.data.map((v,i)=>(
            <li className="xm_people" key={i}>
                <img className="xm_people" src={v.people}/>
                <img className="xm_xd" src="/images/home/xd.png" alt=""/>
                <img className="xm_xz" src={v.xz} alt=""/>
                <img className="xm_xb" src="/images/home/xb.png" alt=""/>
                <a href="javascript:;">
                    <img className="xm_xj" src="/images/home/xj.png" alt=""/>
                </a>
            </li>))
        return(
            <div className="xm_show">
                <div className="xm_title">
                    <img src="/images/home/x_title.png" alt=""/>
                </div>
                <ul className="xm_content" id="xm_content">
                    {people}
                </ul>
                <div className="yq-more">
                    <img src="/images/yq-111_11.png" alt=""/>
                </div>
            </div>
        )
    }
}
//园林雕塑
class Yuan extends React.Component {
    render() {
        return (
            <div>

                <div className="my_navbox">
                    <div className="my_shang">
                    </div>
                    <div className="my_xia">
                        <div className="shang">
                            <div className="zi">
                                <img src="/images/home/my_yuan_10.png" alt=""/>
                                <div className="yuan">
                                    <img src="/images/home/my_yuan_13.png" alt=""/>
                                </div>
                            </div>
                            <div className="hui">
                                <div className="zi">
                                    <p> 园林雕塑按内容可分为纪念性雕塑
                                        主题性雕塑。表现一定的主题内容，如广州市的市徽“五羊”、南京莫愁湖的莫愁女等。装饰性雕塑。题材广泛，人物、动物、植物、
                                        器物都可作为题材如北京日坛公园曲池胜春景区中展翅欲飞的天鹅和各地园林中的运动员、儿童及动物形象、妇女、父亲等</p>
                                    <p className="p1">According to the content of the garden sculpture can be divided
                                        into memorial sculpture theme sculpture. The theme content, such as the
                                        Guangzhou city emblem of the Wuyang Nanjing Mochouhu Mo woman etc.. Decorative
                                        sculpture.
                                    </p>
                                </div>
                                <div className="xiang">
                                    <a href="javascript:">
                                        <img src="/images/home/my_yuan_20.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <img src="/images/home/my_yuan_07.png" alt=""/>

                        </div>
                        <div className="xia">
                            <div className="zuo">
                                <div className="tu">
                                    <img src="/images/home/my_yuan_131.png" alt=""/>
                                </div>
                                <div className="zi">
                                    <p> 园林雕塑有悠久的历史。文艺复兴时期，雕塑已成为意大利园林的
                                        重要组成部分。园中雕塑或结合园林理水，或装饰台层，甚至建立了以展览雕塑为主的“花园博物
                                        馆”、“雕塑公园”。园林雕塑在欧、美各国园林里至今仍占重要地位
                                        山西园林雕塑也极具特色极具山西地域特色</p>
                                    <p className="p1">
                                        Garden sculpture has a long history. During the Renaissance, sculpture has
                                        become an important part of
                                        Italy garden. The sculpture in the garden or the combination of landscape water,
                                        or decorative layer, and
                                        even the establishment of a sculpture based exhibition garden Museum, sculpture
                                        park
                                    </p>
                                </div>
                                <div className="xiang">
                                    <a href="javascript:">
                                        <img src="/images/home/my_yuan_20.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="you">
                                <img src="/images/home/my_yuan_11.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
class Chan extends React.Component {
    render() {
        return (
            <div>
                <div className="my_chanbox">
                    <div className="chan">
                        <div className="shang">
                            <img src="/images/home/my_chan_03.png" alt=""/>
                        </div>
                        <div className="xia">
                            <img src="/images/home/my_ping_07.png" alt=""/>
                        </div>
                    </div>

                    <div className="bei">
                        <div className="zi"></div>
                        <div className="hei"></div>
                    </div>
                </div>
            </div>
        )
    }
}
//总的
class Home extends React.Component{
    render(){
        return(
            <div>
                <common.st_Header data={this.props.header}/>
                <Carousel data={this.props.carousel}/>
                <Culture/>
                <Tab data={this.props.tab}/>
                <Show data={this.props.show}/>
                <Yuan/>
                <Chan/>
                <common.st_Footer/>
            </div>
            )
    }
}
//头部数据
const data=[
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];
//banner
const carousel=[
    {id:1,url:'/images/home/x_1.png'},
    {id:2,url:'/images/home/x_2.jpg'},
    {id:3,url:'/images/home/x_3.jpg'},
    {id:4,url:'/images/home/x_4.jpg'},
    {id:5,url:'/images/home/x_5.jpg'}
];
//选项卡
var lists = [
    {
        title: "建筑文化",
        center:"/images/yq-03_03.png",
    },
    {
        title: "民俗文化",
        center:2,
    },
    {
        title: "旅游文化",
        center:3,
    },
    {
        title: "文化概述",
        center:4,
    },

]
//原泥塑
const arr=[
    {id:1,people:'/images/home/x1.png',xz:'/images/home/xz.png'},
    {id:2,people:'/images/home/x2.png',xz:'/images/home/xz1.png'},
    {id:3,people:'/images/home/x1.png',xz:'/images/home/xz2.png'},
    {id:4,people:'/images/home/x2.png',xz:'/images/home/xz.png'}
];
ReactDOM.render(<Home header={data} carousel={carousel} tab={lists} show={arr}/>,document.getElementById("home"))