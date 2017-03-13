const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');


class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <img src={this.props.title.img} alt=""/>
            </div>
        )
    }
}


class History extends React.Component {
    constructor(props){
        super(props);
        this.state={
            index:0
        }
    }
    render() {
        return (
            <div className="zyj_history">
                <Title title={this.props.title}/>


                <ul className="video">
                    {this.props.data.map((v, i) => (
                        <li key={i} className={(i===this.state.index)?'active':''}>
                            <video width="1078" height='675' src={v.video} controls="controls"> </video>
                        </li>
                    ))}
                </ul>
                { <ul className="more">
                    {this.props.data.map((v, i) => (
                        <li key={i} onClick={()=> (this.setState({index:i}))}>
                            <div className="img">
                                {<img src={v.img} alt=""/>}
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}
const zyj_tiele = {img: "/images/zyj_title_03.png"}
const zyj_niren = [
    {img: '/images/zyj_list_10.png', video: '/images/111.mp4'},
    {img: '/images/zyj_list_11.png', video: '/images/222.mp4'},
    {img: '/images/zyj_list_12.png', video: '/images/333.mp4'},
    {img: '/images/zyj_list_13.png', video: '/images/111.mp4'}
]


class Originone extends React.Component {
    render() {
        return (
            <ul className="con1">
                <li className="con-left">
                    <img src="/images/zyj_list_14.png" alt=""/>
                    <div className="zyj-list-sanjiao">
                        <img src="/images/yq-list-01_03.png" alt=""/>
                    </div>
                </li>
                <li className="con-right">
                    <div className="con-box">
                        <div className="zyj-title">
                            <h3>原生态泥人—醉酒</h3>
                        </div>
                        <p className="contents">泥塑造型憨朴，着色浓艳，在全国泥塑中别具一格。所塑事物，有静有动
                            并多能斗趣、发声。形声俱备，雅拙中透精巧，憨朴中显灵秀，栩栩如生，活
                            灵活，现竖眉瞪眼，昂首踞立，胸挂桃红大花，额涂朱笔大“王”，既威风凛
                            凛，又娇艳可掬，用手拉送首尾，即有啸声发出。一物在手，平添无穷乐趣实
                            属国内泥塑中罕有之佳品。</p>
                        <div className="zyj-more">
                            MORE
                        </div>
                    </div>

                </li>
            </ul>
        )
    }
}
class Origintwo extends React.Component {
    render() {
        return (
            <div className="yq-list">
                <div className="yq-list-box">
                    <div className="yq-list-left">
                        <div className="yq-list-left-box">
                            <div className="yq-list-left-title">
                                <h3>
                                    原生态泥人
                                </h3>
                                <span>
                                —醉酒
                            </span>
                            </div>
                            <div className="yq-list-left-text">
                                <p>
                                    泥塑的彩塑是用湿润软和易于捏塑的黏土，将形体大局依附于骨格的肌肉运动
                                    衣纹变化、面部表情等，自内而外地逐步塑造而成，通过塑造把一切可以观察
                                    的色相、体积、造型、神态等综合的体现出来，成为体质、神态、光色相结合
                                    的形、神并足的塑像。它不单形象地表现人物，而且是「随类赋色」地刻划了
                                    人物的丰采。
                                </p>
                            </div>
                            <div className="yq-list-left-more">
                                <h3>
                                    MORE
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="yq-list-right">
                        <img src="/images/yq-list_03.png" alt=""/>
                        <div className="yq-list-sanjiao">
                            <img src="/images/yq-list-01_03.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Origin extends React.Component {
    render() {
        return (
            <div className="zyj_orgin">
                <Title title={this.props.title}/>
                <Originone/>
                <Origintwo/>
                <Originone/>
                <div className="orgin-page">
                    <common.page data={data}/>
                </div>
            </div>
        )
    }
}
const data = [
    {id: '01'},
    {id: '02'},
    {id: '03'},
    {id: '04'},
    {id: '05'}
]
const zyj_title1 = {img: "/images/zyj_title_04.png"}
// ReactDOM.render(<Origin title={zyj_title1}/>, document.getElementById('zyj_origin'))


class TxtList extends React.Component {
    render() {
        const items = this.props.data.map((v, i) => (
            <div className="xm_tlist" key={i}>
                <img src={v.img} alt=""/>
                <div className="xm_listcon">
                    <h3 className="ltitle">{v.title }<span>THE  HOT</span></h3>
                    <p>{v.content}</p>
                    <ul className="show">
                        <li>
                            <span className="dian"></span>
                            <span className="peope">{v.liu}</span>
                        </li>
                        <li>
                            <span className="dian dian2"></span>
                            <span className="peope">{v.date}</span>
                        </li>
                    </ul>
                </div>
            </div>
        ))
        return (
            <div className="">
                {items}
            </div>
        )
    }
}
const xm_txtlist = [
    {id: 1, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'},
    {id: 2, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'},
    {id: 3, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'},
    {id: 4, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'},
    {id: 5, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'},
    {id: 6, img: '/images/xlist2.png', title: '哈哈', content: '“哈哈…”，这个孩子年龄…', liu: '999浏览', date: '2016-09-22'}
]


class Niren extends React.Component {
    render() {
        return (
            <div>
                <div className="title3">
                    <Title title={this.props.title}/>
                </div>
                <TxtList data={xm_txtlist}/>
                <div className="page-niren">
                    <common.page data={data}/>
                </div>
            </div>
        )
    }
}
const zyj_title3 = {img: "/images/zyj_title_04.png"}
const headerdata = [
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];


class Zyj_list extends React.Component {
    render() {
        return (
            <div>
                <common.st_Header data={headerdata}/>
                <div className="banner">
                    <common.w_banner />
                </div>
                <common.w_btn/>
                <History data={zyj_niren}  title={zyj_tiele}/>
                <Origin title={zyj_title1}/>
                <div id="zyj_niren">
                    <Niren title={zyj_title3}/>
                </div>
                <common.st_Footer/>
            </div>
        )
    }
}
ReactDOM.render(<Zyj_list/>, document.getElementById('page'));
