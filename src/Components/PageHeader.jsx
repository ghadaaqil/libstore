import React, {useEffect} from 'react';
import PageHeader from "antd/lib/page-header";
import Input from "antd/lib/input";
import Badge from "antd/lib/badge";
import {ShoppingOutlined} from '@ant-design/icons'
import 'antd/lib/page-header/style/css';
import 'antd/lib/descriptions/style/css';
import 'antd/lib/badge/style/css';
import styled from "styled-components";
import ButtonCustom from "./Button";
import {savePromo, showBasket} from "../Pages/Basket/redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {NAME} from "../Pages/Basket/redux/constants";
import {getPricePromo} from "../Api/calls";
import join from "lodash/join";

const {Search} = Input;


const PageHeaderCustomized = (props) => {

    const dispatch = useDispatch();
    const shoppingBag = useSelector(state => state[NAME].shoppingBag);
    useEffect(async () => {
        const result = await getPricePromo(join(shoppingBag, ','));
        return dispatch(savePromo(result.data))
    })
    return (
        <StyledHeader>
            <PageHeader key="header"
                        ghost={false}
                        title="ALL BOOKS"
                        extra=
                            {
                                [<Search key="search" placeholder="Search your book !!"
                                         onSearch={(input) => props.onSearch(input)}
                                         enterButton/>,
                                    <ButtonCustom key="basket" type="primary"
                                                  icon={<><ShoppingOutlined/><Badge count={props.count}/>
                                                  </>} size="large" onClick={() => dispatch(showBasket(true))}/>,
                                ]
                            }
            >
            </PageHeader>
        </StyledHeader>
    )
}


export default (PageHeaderCustomized);

const StyledHeader = styled.div`

  margin: 4px 100px;
  width: 1080px;
  .ant-page-header-heading-title{
    color: white;
  }
  .ant-input-search-button{
    background: black;
    border-color: black;
  }
  .ant-btn-icon-only{
    background: black;
    border-color: black;
  }
  .ant-btn-icon-only.ant-btn-lg {
    width: 40px;
    font-size: 18px;
    border-radius: 12px;
    margin-top: -5px;
  }
  .ant-page-header{
    background-color: inherit;
  }
`;
