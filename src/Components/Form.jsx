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
import styled from "styled-components";


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
        <FormStyle>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Item name="Username" required Component={<Input/>}/>
                <Item name="Password" required Component={<Input.Password/>}/>
                <Item {...tailLayout} name=""
                      Component={<ButtonCustom type="primary" htmlType="submit" action="Submit"/>}/>

            </Form>
        </FormStyle>
    );
};

const mapDispatchToProps = {
    saveCredentials,
}
export default connect(null, mapDispatchToProps)(withRouter(FormWithActions))
const FormStyle = styled.div`
  justify-content: center;

  .ant-form-item-control-input {
    margin: auto 10px;
    width: 300px;
  }

  .ant-form-item-explain-error {
    color: darkred;
    width: 300px;
  }

  .ant-btn-primary {
    color: #fff;
    border-radius: 12px;
    background: black;
    margin: auto 85px;
    border-color: black;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.145);
  }
`;
