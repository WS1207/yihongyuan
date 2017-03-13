const React = require('react');
const ReactDOM = require('react-dom');
const nav = require('./common.jsx');
import {Layout, Icon, Dropdown, Form, Input} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class HorizontalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return ( <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem validateStatus={userNameError ? 'error' : ''}
                      help={userNameError || ''}>{getFieldDecorator('userName', {
                rules: [{
                    required: true,
                    message: 'Please input your username!'
                }],
            })
            (<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>)
            }
            </FormItem>
            <FormItem
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
            > {getFieldDecorator('password', {rules: [{required: true, message: 'Please input your Password!'}],})(
                <Input
                    prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                    placeholder="Password"/>)} </FormItem>
        </Form> );
    }
}
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(
    <nav.AppNav>
        <WrappedHorizontalLoginForm/>
    </nav.AppNav>
    , document.querySelector('#page'));