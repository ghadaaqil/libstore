import Card from "antd/lib/card";
import Meta from "antd/lib/card/Meta";

const BookCover=(props)=>(
    <Card key={props.isbn}
        hoverable
        style={{ width: 240 }}
        cover={<img src={props.cover}/>}
    >
        <Meta title={props.price+"€"} description={props.qte} />
    </Card>
)

export default BookCover;
