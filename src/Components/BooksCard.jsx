import {Card, Col, Collapse, Tag} from "antd";
import 'antd/lib/card/style/css';
import 'antd/lib/collapse/style/css';
import 'antd/lib/tag/style/css';
import Meta from "antd/es/card/Meta";
import {PlusOutlined} from "@ant-design/icons";
import Button from "./Button";

const {Panel} = Collapse;

const BookCard = (props) => (
    <Col className="gutter-row" span={6}>
        <Card size="small"
              hoverable
              style={{width: 350}}
              cover={<img alt="example" src={props.cover}/>}
              actions={[
                  <Button icon={<PlusOutlined/>} onClick={props.onClick.bind(this,props.isbn)}/>
              ]}
        >
            <Meta title={props.title}/>
            <Tag color="red">{props.price}€</Tag>
            <Collapse>
                <Panel header="Read synopsis" key="0">
                    <p>{props.synopsis}</p>
                </Panel>
            </Collapse>
        </Card></Col>

)
export default BookCard
