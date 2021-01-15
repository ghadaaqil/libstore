import React from 'react';
import {PageHeader, Descriptions, Badge} from "antd";
import {ShoppingOutlined} from '@ant-design/icons'
import 'antd/lib/page-header/style/css';
import 'antd/lib/descriptions/style/css';
import 'antd/lib/badge/style/css';

import ButtonCustom from "./Button";

const PageHeaderCustomized = (props) => (
    <PageHeader
        ghost={false}
        title="ALL BOOKS"
        extra=
            {
                [
                    <ButtonCustom type="primary"  icon={<><ShoppingOutlined/><Badge count={props.count}/>
                       </>} size="large"  onClick={props.onClick}/>
                ]
            }
    >
    </PageHeader>
)

export default PageHeaderCustomized;
