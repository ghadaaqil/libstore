import {Card, Col, Collapse, Tag} from "antd";
import 'antd/lib/card/style/css';
import 'antd/lib/collapse/style/css';
import 'antd/lib/tag/style/css';
import Meta from "antd/es/card/Meta";
import {PlusOutlined,MinusOutlined} from "@ant-design/icons";
import Button from "./Button";
import styled from "styled-components";

const {Panel} = Collapse;

const BookCard = (props) => (
    <StyledBook>
        <Card size="small"

              hoverable
              cover={<img src={props.cover}/>}
              actions={[<Button icon={<MinusOutlined />} onClick={props.onMinusClick.bind(this,props.isbn)}/>,
                  <Button icon={<PlusOutlined/>} onClick={props.onAddClick.bind(this,props.isbn)}/>,
              ]}
        >
            <Meta title={props.title}/>
            <Tag color="red">{props.price}€</Tag>
            <Collapse>
                <Panel header="Read synopsis" key="0">
                    <p>{props.synopsis}</p>
                </Panel>
            </Collapse>
        </Card></StyledBook>

)
export default BookCard

const StyledBook=styled.div`
  .ant-card-small{
    margin: 10px;
    width: 250px;
  }
  .ant-card-meta-title{
    font-size: small;
    white-space:unset;
  }

` ;
