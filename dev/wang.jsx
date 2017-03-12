const React = require('react');
const ReactDOM = require('react-dom');

class WangEditor extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.editor=new wangEditor(this.el);
        console.log(this.editor)
        this.editor.config.uploadImgUrl=this.props.url;
        this.editor.config.menus=$.map(wangEditor.config.menus,function (item,key) {
            if(item==='location'){
                return null;
            }
            return item;
        });
        this.editor.create();
        if(this.props.content){
            this.editor.$txt.html(this.props.content)
        }
    }


    render() {
        return (
            <div>
                <div ref={(el)=>{this.el=el}} style={{height:200}}></div>
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