import React from "react";
import {Button} from "antd";
import 'antd/lib/button/style/css';

const ButtonCustom = (props) => (
    <Button type={props.type} htmlType={props.htmlType} icon={props.icon} size={props.size} onClick={props.onClick}>
        {props.action}
    </Button>)

export default ButtonCustom;
