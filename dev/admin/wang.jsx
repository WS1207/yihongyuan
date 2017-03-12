const React = require('react');
const ReactDOM = require('react-dom');

class WangEditor extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.eidtor=new wangEditor(this.e);
        this.eidtor.config.uploadImgUrl=this.props.url;
        this.eidtor.config.menus=$.map(wangEditor.config.menus,function (item,key) {
            if(item==='location'){
                return null;
            }
            return item;
        });
        this.eidtor.create();
        if(this.props.content){
            this.editor.$txt.html(this.props.content)
        }
    }
    render() {
        return (
            <div>
                <div ref={(el)=>{this.e=el}} style={{height:500}}></div>
                <div onClick={()=>{this.props.save(this.editor.$txt.html())}}>
                    点击获取内容
                </div>
            </div>

        )
    }
}
//要呈现的内容
//点击保存时调用的函数
//
exports.WangEditor = WangEditor;