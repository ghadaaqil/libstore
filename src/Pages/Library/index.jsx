import React, {PureComponent} from 'react';
import PageHeader from '../../Components/PageHeader';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {Row} from "antd";
import {getAllBooks, getBooksInTheBasket} from "./redux/selectors";
import BookCard from "../../Components/BooksCard";
import {addToBasket} from "./redux/actions";

class Library extends PureComponent {
    addBook=(isbn)=> {
        console.log("qs:qsld:qs",isbn)
        return this.props.addToBasket(isbn)
    }

    renderBooks = (books) => books.map(item => <BookCard {...item} onClick={this.addBook}/>)

    render() {
        const {booksInShoppingBag,books}=this.props;
        return (

            <div className="site-page-header-ghost-wrapper">
                <PageHeader count={booksInShoppingBag.length}/>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {this.renderBooks(books)}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    books: getAllBooks,
    booksInShoppingBag:getBooksInTheBasket
})
const mapDispatchToProps={
    addToBasket
}
export default connect(mapStateToProps,mapDispatchToProps)(Library);
