const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');

const headerdata = [
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];

const data = [
    {id: '01'},
    {id: '02'},
    {id: '03'},
    {id: '04'},
    {id: '05'}
]

class Zyj_more extends React.Component{
    render(){
        return(
            <div className="zyj_more">
                <h1 className="zyj_more_name">连年有四季安康手工剪纸福字</h1>
                <h3 className="zyj_more_small">successive years in ankang </h3>
                <h3 className="zyj_more_small">manual paper-cut</h3>
                <div className="zyj_more_text">福宇的不同字体写法很多.如行书、楷书、草书、隶书、篆书的都有民间剪纸中
                    常见行书、楷书两体.其他形式则多见篆书的福字.</div>
                <div className="zyj_list_eng">Fu yu's write many different fonts. Such as running
                    script, regular script, cursive script..</div>
            </div>
        )
    }
}

//特色产品组件
class Feature extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="paper-cuts">
                <div className="title"></div>
                <div className="content">
                    <div className="con-top">
                        <div className="left">
                            <img src="/images/zyj_feature_01.png" alt=""/>
                            <div className="zyj_biao_left"></div>
                        </div>
                        <div className="right">
                            <Zyj_more/>
                        </div>
                    </div>
                    <div className="con-bottom">
                        <div className="right">
                            <Zyj_more/>
                        </div>
                        <div className="left">
                            <img src="/images/zyj_feature_06.png" alt=""/>
                            <div className="zyj_biao_right"></div>
                        </div>
                    </div>
                </div>
                <div className="zyj_page">
                    <common.page data={data}/>
                </div>
            </div>
        )
    }
}



//产品展示组件
class Specialty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="specialty">
                <div className="title"></div>
                <ul className="content">
                    {this.props.data.map((v, i) =>
                        <li key={i} className="show">
                            <div className="bigimg">
                                <img src={v.img} alt=""/>
                            </div>
                            <h1>{v.title}</h1>
                            <div className="biao"></div>
                            <div className="text">
                                {v.con}
                            </div>
                        </li>
                    )}
                </ul>
                <div className="page11">
                    <common.page data={data}/>
                </div>
            </div>

        )
    }
}
const zyj_list = [
    {img: '/images/zyj_list_01.png', title: '喜鹊登枝', con: '相信鹊能报喜的观念，早在两千多年前便已经在民间流行。含义来源唐...'},
    {img: '/images/zyj_list_02.png', title: '鱼跃龙门', con: '相信鹊能报喜的观念，早在两千多年前便已经在民间流行。早在两千多年前便已经在民间流行早在两千多年前便已'},
    {img: '/images/zyj_list_03.png', title: '事事如意', con: '事事如意是汉族传统吉祥图案之一。由两个柿子和一只如意构图。取吉...'},
    {img: '/images/zyj_list_04.png', title: '喜上眉梢', con: '相信鹊能报喜的观念，早在两千多年前便已经在民间流行。含义来源唐...'},
    {img: '/images/zyj_list_05.png', title: '猴子吃桃', con: '事事如意是汉族传统吉祥图案之一。由两个柿子和一只如意构图。取吉...'},
    {img: '/images/zyj_list_06.png', title: '连年有余', con: '事事如意是汉族传统吉祥图案之一。由两个柿子和一只如意构图。取吉...'},
    {img: '/images/zyj_list_07.png', title: '二龙戏珠', con: '事事如意是汉族传统吉祥图案之一。由两个柿子和一只如意构图。取吉...'},
    {img: '/images/zyj_list_08.png', title: '虎虎生威', con: '虎虎形容威武雄壮或精神、气势旺盛清龚自珍 《怀我先箴》:言满朝野...'},
    {img: '/images/zyj_list_09.png', title: '牛气冲天', con: '比喻从根本上改变整个局面。“牛气冲天”比喻事业兴旺...'},


]

class Zyj_list extends React.Component {
    render() {
        return (
            <div>
                <common.st_Header data={headerdata}/>
                <div className="banner">
                    <common.w_banner />
                </div>
                <common.w_btn/>
                <Feature />
                <Specialty data={zyj_list}/>
                <common.st_Footer/>
            </div>
        )
    }
}
ReactDOM.render(<Zyj_list/>, document.getElementById('page'));

