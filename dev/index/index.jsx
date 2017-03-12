const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./common.jsx');
const STheader=require('./st_header.jsx');
const STfooter=require('./st_footer.jsx');
/*头部*/
const stdata=[
    {id:1,title:'品牌介绍',img:'/images/st_navhover.png',href:"brand"},
    {id:1,title:'晋韵文化',img:'/images/st_navhover.png',href:"culture"},
    {id:1,title:'原生态泥人',img:'/images/st_niren.png',href:"clay"},
    {id:1,title:'剪纸艺术',img:'/images/st_navhover.png',href:"papercut"},
    {id:1,title:'园林雕塑',img:'/images/st_navhover.png',href:"sculpture"},
    {id:1,title:'旅游产品',img:'/images/st_navhover.png',href:"tour"},
    {id:1,title:'联系我们',img:'/images/st_navhover.png',href:"contact"}
];
/*图片在左边*/
//图片
class Pic extends React.Component {
    render() {
        const pic = this.props.data.map((v, i) => (
            <img key={i} src={v.pic} alt="" style={{}}/>
        ))
        return (
            <div className="pic">
                {pic}
            </div>
        )
    }
}
class Rpic extends React.Component {
    render() {
        const pic = this.props.data.map((v, i) => (
            <img key={i} src={v.pic} alt=""/>
        ))
        return (
            <div className="rpic">
                {pic}
            </div>
        )
    }
}
//内容
class Content extends React.Component {
    render() {
        const con = this.props.data.map((v, i) => (
            <div key={i}>
                <img src={v.title} alt=""/>
                <h6>{v.intro}</h6>
                <p>{v.content}</p>
                <div className="more">
                    了解更多
                </div>
            </div>
        ))
        return (
            <div className="content">
                {con}
            </div>
        )
    }
}
class Rcontent extends React.Component {
    render() {
        const con = this.props.data.map((v, i) => (
            <div key={i}>
                <img src={v.title} alt=""/>
                <h6>{v.intro}</h6>
                <p>{v.content}</p>
                <div className="more">
                    了解更多
                </div>
            </div>
        ))
        return (
            <div className="rcontent">
                {con}
            </div>
        )
    }
}
//整个组件
class SculptureCulture extends React.Component {
    render() {
        return (
            <div className="ws-content ws_page">
                <Pic data={wspic}/>
                <Content data={wsdata}/>
            </div>
        )
    }
}
class RsculptureCulture extends React.Component {
    render() {
        return (
            <div className="ws-content ws_page1">
                <Rcontent data={rwsdata}/>
                <Rpic data={rwspic}/>
            </div>
        )
    }
}
//模拟数据
const wspic = [
    {id: 2, pic: '/images/文章3_03.png'}
];
const rwspic = [
    {id: 2, pic: '/images/文章3_15.png'}
];
const wsdata = [
    {
        id: 1,
        title: '/images/文章3_06.png',
        intro: '这里是民间艺术的天堂',
        content: '我国泥塑艺术可上溯到距今4千至1万年前的新石器时期。史前文化地下考古就有多处发现。浙江河姆渡文化遗址出土的陶猪、陶羊时间约为6千至7千年前左右；河南新郑裴李岗文化遗址出土的古陶井及泥猪、泥羊头时间约为7千年前。可以确认是人类早期手工捏制的艺术品。'
    }
];
const rwsdata = [
    {
        id: 1,
        title: '/images/文章3_18.png',
        intro: '这里是民间艺术的天堂',
        content: '晋剧即山西梆子，也叫中路戏，中国传统戏曲。因兴起于晋中汾阳、孝义、祁县、太谷及太原而得名。流传外地后，被称为山西梆子，后改称晋剧。中路梆子源于蒲州梆子，清道光、咸丰年间已盛行，流行于山西中部、内蒙、河北、陕西部分地区。发展过程中吸收晋中地区民歌秧歌等民间艺术韵调，风格特具'
    }
];
/* 左右结束*/
// 文章列表的旅游文化开始
class Travel extends React.Component {
    render() {
        var v = this.props.data;
        return (
            <div className="xm_content">
                <div className="xm_left">
                    <div className="xm_hover"></div>
                    <img src={v.img} alt=""/>
                </div>
                <div className="xm_right">
                    <div className="xm_title">{v.title}<span>{v.etitle.toUpperCase()}</span></div>
                    <div className="xm_des">{v.des}</div>
                    <p className="xm_matter">{v.content}</p>
                    <div className="xm_more">more</div>
                </div>
            </div>
        )
    }
}
class Itemtravel extends React.Component {
    render() {
        var items = this.props.list.map((v, i) => <Travel data={v} key={i}/>)
        return (
            <div className="xm_list">
                {items}
            </div>
        )
    }
}
const travel = [
    {
        img: '/public/images/xm1.png',
        title: '剪纸文化',
        etitle: 'Paper cutting culture',
        des: '美的安静，扎根民众，与生活相关，是一种态度',
        content: '剪纸是一种扎根民众之间，与人民生活紧密关联，为千家万户增色添喜的一种民间艺术形式。山西民间剪纸的风格，总体来说，具有北方地区粗扩、雄壮、简练、纯朴的特点。这些极普通的剪纸作品，虽不象珍珠翡翠那样华贵辉煌却牵连着每个人的心灵具有牵心动魄的艺术魅力。'
    },
    {
        img: '/public/images/xm2.png',
        title: '晋商文化',
        etitle: 'Shanxi culture',
        des: '美的安静，扎根民众，与生活相关，是一种态度',
        content: '在中国明清以来的近代经济发展史上，驰骋欧亚的晋商举世瞩目，山西特别是以太谷、祁县、榆次、平遥等为代表的晋中盆地商人前辈，举商贸之大业，经营范围包罗万象，夺金融之先声钱庄票号汇通天下，称雄五百余年，创造了亘古未有的世纪性繁荣，在神州大地上留下了灿烂的商业文化。'
    },
    {
        img: '/public/images/xm3.png',
        title: '晋祠侍女',
        etitle: 'Jinci maid',
        des: '不同的神态，不同的服饰',
        content: '晋祠侍女各自都有比较鲜明的个性，并显示出不同的气质风韵。有的像是在招呼微笑，有的似乎在窃窃私语，彩塑侍女个个塑造得，面目清秀，圆润俏丽，从容自若。从这些彩塑侍女身旁几乎能感到她们的呼吸和脉博的跳动，仿佛听到年轻侍女们的娓娓低语，表达了宋代青年女性的生活和情感。'
    }
]
// 文章列表的旅游文化结束
// 文章列表的建筑文化开始
class Buildint extends React.Component {
    render() {
        const v = this.props.data;
        return (
            <div className="xm_introduce">
                <i className="xm_bedeck"></i>
                <span className="xm_place">{v.name}</span>
                <p className="xm_bdes">{v.init}<span>{v.extrude}</span></p>
                <h3 className="xm_rem">{v.cover}</h3>
                <p className="xm_bcontent">{v.content}</p>
                <p className="xm_becon">{v.enlish}</p>
                <div className="xm_more">了解更多</div>
            </div>
        )
    }
}
const buildints ={
    name: "平遥古城",
    init: "every trip will be ",
    extrude: "different",
    cover: "每次旅游都会有所不同",
    content: "平遥古城位于山西省中部平遥县内，始建于西周宣王时期（公元前827年到公元前782年）。 山西平遥被称为“保存最为完好的四大古城”之一，也是中国仅有的以整座古城申报世界文化遗产获得成功的两座古城市之一。",
    enlish: "Each trip will meet different good"
};
const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
]
/*类似跑马图开始*/
class Item extends React.Component {
    render() {
        return (
            <div className="item"
                 style={{left: this.props.left}}>
                <img src={this.props.img} alt=""/>
            </div>
        )
    }
}
class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {             //state是异步的
            index: 0
        };
        this.prev = this.prev.bind(this);//bind 生成一个和原函数一样的函数但是比原来的强大
        this.next = this.next.bind(this);
    }
    prev() {
        this.setState((ps) =>
            ({index: (ps.index - 1 < 0) ? 0 : (ps.index - 1)}))
    }
    next() {
        const len = this.props.data.length;
        this.setState((ps) =>
            ({index: (ps.index + 1 >= len) ? (len - 1) : (ps.index + 1)}))
    }
    render() {
        // zindex={-(i - this.props.data.length)}
        const items = this.props.data.map((v, i) => (
            <Item key={i} img={v.pic} left={653 * (i)} />
        ));
        return (
            <div className="slides">
                <div className="ws_items">
                    <div className="Items" style={{transform:`translate3d(${-653*this.state.index}px,0,0)`}}>
                        {items}
                    </div>
                </div>

                <div className="btns">
                    <div className="prev" onClick={this.prev}>
                        &lt;
                    </div>
                    <div className="next" onClick={this.next}>
                        &gt;
                    </div>
                </div>
            </div>
        )
    }
}
const sw = [
    {id: 1, pic: '/images/文章3_23.png'},
    {id: 1, pic: '/images/文章3_24.png'},
    {id: 1, pic: '/images/文章3_25.png'}
];
/*类似跑马图结束*/
class BuildCulture extends React.Component{
    render(){
        return (
            <div className="xm_build">
                <div className="xm_buildcon">
                    <div className="">
                        <Buildint data={buildints}/>
                    </div>
                    <div className="xm_picture">
                        <Switcher data={sw}/>
                    </div>
                </div>
            </div>
            )
    }
}
// 文章列表的建筑文化结束
//分页的小组件
class Page extends React.Component {
    render() {
        return (
            <div className="">
                <common.page data={data}/>
            </div>
        )
    }
}
/*标题开始*/
class Title extends React.Component {
    render() {
        const title = this.props.data.map((v, i) => (
            <li key={i}><img src={v.title} alt=""/></li>
        ))
        return (
            <div className="title page3">
                {title}
            </div>
        )
    }
}
const title = [
    {id: 1, title: '/images/文章列表2_03.png'},
    // {id: 3, title: '/images/文章列表2_09.png'},
    // {id: 4, title: '/images/文章列表2_13.png'}
]
/*标题结束*/
/*横向全屏开始*/
class All extends React.Component {
    render() {
        return (
            <div className="page4">
                <h1>{this.props.data.title}</h1>
                <h3>{this.props.data.intro}</h3>
                <p>{this.props.data.word}</p>
            </div>
        )
    }
}
const all = {
    id: 1,
    title: '建筑经典',
    intro: '千万年的历史长河让经典更有韵味',
    word: '常家庄园，国家AAAA级旅游景区，是被称为“儒商世家”的榆次东阳镇车辋村常氏家族的宅院建筑群。常家庄园目前开放为遗存的半条街。其中宅院4公顷、园林8公顷、附属房屋3公顷，庄墙12公里，形成一山、一阁、两轩、四园、五院、六水、九堂、八贴、十三亭、二十五廊、二十七宅院”的格局。常家庄园占地12余万平方米，是规模最大的晋商大院，也是中国最大的庄园式建筑群。'
};
class Az extends  React.Component{
    render(){
        return(
            <div>
                <common.w_banner/>
                <common.w_btn/>
            </div>
        )
    }
}
const Aa = (
    <div>
        <STheader.Header data={stdata}/>
        <Az />
        <Title data={title}/>
        <SculptureCulture/>
        <RsculptureCulture/>
        <All data={all}/>
        <Title data={title}/>
        <BuildCulture />
        <Title data={title}/>
        <Itemtravel list={travel}/>
        <Page />
        <common.st_Footer/>
    </div>
);
ReactDOM.render(Aa, document.getElementById('page'));