import {Form} from "antd";
import React from "react";

const rules = (label,required) => ([
    {
        required,
        message: `Please input your ${label}`,
    },
]);
const Item = ({name,required, Component,valuePropName, tailLayout}) => (
    <Form.Item
    label={name}
    name={name}
    rules={rules(name,required)}
    valuePropName={valuePropName}
    {...tailLayout}
>
        {Component}

</Form.Item>)
export default Item
