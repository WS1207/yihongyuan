const React = require('react');
const ReactDOM = require('react-dom');
class TxtList extends React.Component{
    render(){
        const items = this.props.data.map((v,i)=>(
            <div className="xm_tlist" key={i}>
                <img src={v.img} alt="" />
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
        return(
            <div className="">
                {items}
            </div>
        )
    }
}
const xm_txtlist=[
    {id:1,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'},
    {id:2,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'},
    {id:3,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'},
    {id:4,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'},
    {id:5,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'},
    {id:6,img:'/public/images/xlist2.png',title:'哈哈',content:'“哈哈…”，这个孩子年龄…',liu:'999浏览',date:'2016-09-22'}
]
ReactDOM.render(<TxtList data={xm_txtlist}/>, document.getElementById('xm_txt'));