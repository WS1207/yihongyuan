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
    render() {
        return (
            <div className="container">
                <div className="top">
                    <Common.st_Header data={data}/>
                </div>
                    <Common.w_banner/>
                <Common.w_btn/>
                <div className="con1">
                    <img src="/images/w15.png" alt=""/>
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
    {id:1,title:'自新石器时代之后，中国泥塑艺术一直没有间断，发展到汉代已成为重要的艺术品种。考古工作者从两汉墓葬中发掘了大量的文物，其中有为数众多的陶俑、陶兽、陶马车陶船等等。其中有手捏的，也有模制的。汉代先民认为亡灵如人生在世，同样有物质生活的需求。因此丧葬习俗中需要大量的陪葬品，这在客观上为泥塑的发展和演变起了推动作用。两汉以后，随着道教的兴起和佛教的传入，以及多神化的奉祀活动，社会上的道观、佛寺、庙堂兴起，直接促进了泥塑偶像的需求和泥塑艺术的发展。到了唐代，泥塑艺术达到了顶峰。被誉为雕塑圣手的杨惠之就是唐代杰出的代表。他与吴道子同师张僧繇，道子学成，惠之不甘落后，毅然焚毁笔砚，奋发专攻塑，终成名家。为当世人称赞：“道子画，惠之塑，夺得僧繇神笔路”。泥塑艺术发展到宋代，不但宗教题材的大型佛像继续繁荣，小型泥塑玩具也发展起来。有许多人专门从事泥人制作，作为商品出售。北宋时东京著名的泥玩具“磨喝乐”在七月七日前后出售，不仅平民百姓买回去“乞巧”，达官贵人也要在七夕期间买回去供奉玩耍。',img6:'/images/w_con2_07.png'}
];
const wzq_data=[
    {id:1,p:'泥塑的基本用料——泥土需精心准备，一般选用带些粘性又细腻的土，经过捶打、摔、揉，有时还要在泥土里加些棉絮、纸、蜂蜜等。泥塑的模制一般分为四步：制子儿、翻模、脱胎、着色。制子儿就是制出原型，找一块和好的泥，运用雕、塑、捏等手法，塑造好一个形象，经过修改、磨光、晾干后即可，有些地方还要用火烧一下，加强强度。翻模就是把泥土压在原形上印成模子，常见有单片模和双片模，也有多片模。脱胎就是用模子印压泥人坯胎，通常是先把和好的泥擀成片状，然后压进模子，再把两片压好泥的模子合拢压紧，再安一个“底”，即在泥人下部粘上一片泥，使泥人中空外严，在胎体上留一个孔，使胎体内外空气流通，以免胎内空气压力变化破坏泥胎。。最后一道工序是着色，素有“三分塑，七分彩”之说。一般着色之前先上一层底色，以保持表面光洁，便于吸收彩绘颜色，彩绘的颜料多用品色，调以水胶，以加强颜色附着力。随着改革开放、旅游事业的发展，这朵古老的民间艺术之花大放光采。成为陕西重要的旅游纪念品之一。1998年6月访华的原美国总统克林顿夫妇也来观看了这"绝活儿"；世界儿童组织负责人得到彩绘泥塑，如获至宝，称赞泥塑是为孩子们制作的最好礼物。',img1:'/images/w17.png',img5:'/images/111111.png',img6:'/images/22222.png'}
];
const right_data=[
    {id:1,img:'/images/w20.png',title:'泥塑流派',p:'做源人殉葬，做佛像膜拜，做“耍货”玩赏的民间风俗，是中国泥塑艺术得以发展的主要原因。至唐宋时代，泥塑艺术发展到盛期，著名泥塑有甘肃敦煌莫高窟的菩萨，山西太原晋调的宫女等。至清代，泥塑形成南北两著名流派：北方有天津“泥人张”，南方有无锡惠山泥人。',title2:'石泥塑的概念',t2p:'泥塑，俗称“彩塑”泥塑艺术是中国民间传统的一种古老常见的民间艺术。即用粘土塑制成各种形象的一种民间手工艺制作方法是在粘土里掺入少许棉花纤维，捣匀后，捏制成各种人物的泥坯，经阴干，涂上底粉，再施彩绘。它以泥土为原料，以手工捏制成形，或素或彩，以人物、动物为主。“彩塑”、“泥玩”。泥塑发源于宝鸡市凤翔县，流行于陕西、天津、江苏、河南等地。'}
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

