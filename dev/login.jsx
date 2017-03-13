const React = require('react');
const ReactDOM = require('react-dom');
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            hint: ''
        }
    }

    handleSubmit(e) {
        const that = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var data = '';
                for (var i in values) {
                    data += i + '=' + values[i] + '&';
                }
                data = data.slice(0, -1);
                fetch('/login/check', {
                    credentials: 'same-origin',
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(values)
                }).then((res) => res.json()).then((data) => {
                    if (data == "ok") {
                        location.href = "/admin";
                    } else {
                        that.setState({hint: '用户名或密码错误'})
                    }
                })
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input addonBefore={<Icon type="user"/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <p className="hint" style={{color: 'red'}}>{this.state.hint}</p>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class Page extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{color: '#fff', fontSize: '20px'}}>艺弘缘后台管理系统</Header>
                <Content style={{padding: '100px',width:'500px', minHeight: '300px', margin:'0 auto'}}>
                    <WrappedNormalLoginForm />
                </Content>
                <Footer>
                    <p style={{textAlign: 'center'}}>copy right 1608 group @2017</p>
                </Footer>
            </Layout>
        )
    }
}
ReactDOM.render(<Page/>, document.querySelector("#page"));