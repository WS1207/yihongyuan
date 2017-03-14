const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const nav = require('./common.jsx');
import { Menu, Icon, Button, Card, Row, Input, Table, Popconfirm} from 'antd';
const {SubMenu} = Menu;
class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.check=this.check.bind(this);
        this.edit=this.edit.bind(this);
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    check(){
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit(){
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}
class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '电话',
            dataIndex: 'phone',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'phone')}
                />
            ),
        }, {
            title: '邮箱',
            dataIndex: 'email',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'email')}
                />
            ),
        }, {
            title: '地址',
            dataIndex: 'add',
            width: '40%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'add')}
                />
            ),
        }];
        this.state = {
            dataSource: [{
                key: '',
                phone: '',
                email: '',
                add: ''
            }],
            count: 0,
        };
        this.onCellChange=this.onCellChange.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }
    onCellChange(index, key) {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({dataSource});
            const dataSources=dataSource[index];
            console.log(dataSources);
            fetch('/admin/contact/update', {
                    method: 'POST',
                    // 让session生效
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataSources)
                }
            ).then((res)=>res.json()).then((data)=>{
                if(data=='ok'){
                    console.log('修改成功！');
                }
            })
        }
    }
    onDelete(index){
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    }
    componentDidMount() {
        fetch('/admin/contact/all', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            console.log(data)
            this.setState({
                dataSource: data,
                count:`${data.length}`
            });
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Table bordered dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <EditableTable />
    </nav.AppNav>
    , document.querySelector('#page'));