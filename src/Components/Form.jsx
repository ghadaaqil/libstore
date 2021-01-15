import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/lib/form/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/input/style/css';
import {connect} from 'react-redux';
import Item from './Item'
import {saveCredentials} from "../Pages/Authentication/redux/actions";
import ButtonCustom from "./Button";
import {push} from "../history";
import {withRouter} from "react-router-dom";


const layout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 4,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 5,
        span: 4,
    },
};


const FormWithActions = (props) => {

    const onFinish = (values) => {
        props.saveCredentials(values);
        push('/library')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Item name="username" required Component={<Input/>}/>
            <Item name="password" required Component={<Input.Password/>}/>
            <Item {...tailLayout} name="remember" valuePropName="checked" Component={<Checkbox/>}/>
            <Item {...tailLayout} name="Submit"
                  Component={<ButtonCustom type="primary" htmlType="submit" action="Submit"/>}/>

        </Form>
    );
};

const mapDispatchToProps = {
    saveCredentials,
}
export default connect(null, mapDispatchToProps)(withRouter(FormWithActions))
