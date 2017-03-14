const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.check = this.check.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
    }

    check() {
        this.setState({editable: false});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }

    edit() {
        this.setState({editable: true});
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
        this.state = {
            dataSource: [{
                key: '',
                url: ''
            }],
            count: 1,
        };
        this.columns = [{
            title: 'url',
            dataIndex: 'video',
            width: '70%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'url',this.state.dataSource[index].key)}
                />
            ),
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                var id = this.state.dataSource[index].key;
                return (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(id)}>
                        <a href="javascript:;">Delete</a>
                    </Popconfirm>
                );
            },
        }];
        this.onCellChange = this.onCellChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        fetch('/admin/getVideo', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            var arr = [];
            data.forEach((v, i)=> {
                var obj = {key: v.id, video: v.video};
                arr.push(obj);
            })
            this.setState({dataSource: arr});
        });
    }
    onCellChange(index, key, id) {
        return (value) => {
            const that=this;
            var dataSource = [...this.state.dataSource];
            var id = dataSource[index].key;
            var data = {
                id: id,
                video: value
            }
            fetch("/admin/chVideo", {
                method: "post",
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(data)
            }).then((res)=>
                res.json()
            ).then((data)=> {
                if(data==200){
                    dataSource[index][key] = value;
                    console.log(dataSource);
                    that.setState({dataSource});
                }
            })
        };
    }
    onDelete(index) {
        var id = {id: index};
        var arr = [...this.state.dataSource];
        const that=this;
        fetch('/admin/delVideo', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(id)
        }).then((res)=>
            res.json()
        ).then((data)=> {
            if(data==200){
                arr.forEach((v, i)=> {
                    if (v.key == index) {
                        arr.splice(i, 1);
                    }
                })
                that.setState({dataSource: arr});
            }
        })
    }
    handleAdd() {
        const { count, dataSource } = this.state;
        const that = this;
        fetch('/admin/addVideo', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            const newData = {
                key: data,
                video: "",
            };
            that.setState({
                dataSource: [...dataSource, newData],
                count: count + 1,
            });
        });

    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} pagination={{pageSize:5}} columns={columns}/>
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <div className="des">
            <EditableTable />
        </div>
    </nav.AppNav>
    , document.querySelector('#page'));