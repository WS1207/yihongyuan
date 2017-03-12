const React = require('react');
class Topnav extends React.Component{
    render(){
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
exports.Header=Header;