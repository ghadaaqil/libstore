import React, {PureComponent} from 'react';
import PageHeader from '../../Components/PageHeader';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import Empty from "antd/lib/empty";
import {getAllBooks} from "./redux/selectors";
import {getBooksInTheBasket} from "../Basket/redux/selectors";
import BookCard from "../../Components/BookCard";
import {addToBasket, removeFromBasket} from "../Basket/redux/actions";
import 'antd/lib/empty/style/css';
import Drawer from "../../Components/Drawer";
import styled from "styled-components";

class Library extends PureComponent {
    state = {
        books: this.props.books,
    }


    addBook = (isbn) => this.props.addToBasket(isbn)
    removeBook = (isbn) => this.props.removeFromBasket(isbn)

    searchBook = (input) => {
        const searchRes = this.props.books.filter(elemt => elemt.title.includes(input));
        return this.setState({books: searchRes});
    }
    renderBooks = (books) => books && books.length ?
        books.map(item => <BookCard {...item} key={item.isbn} onAddClick={this.addBook}
                                    onMinusClick={this.removeBook}/>) :
                          <Empty description={false}/>

    render() {
        const {booksInShoppingBag} = this.props;
        return (

            <StyledLibrary>
                <Drawer/>

                <PageHeader count={booksInShoppingBag.length || 0} onSearch={this.searchBook}/>
                <div className="books-container">
                    {this.renderBooks(this.state.books)}
                </div>
            </StyledLibrary>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    books: getAllBooks,
    booksInShoppingBag: getBooksInTheBasket
})
const mapDispatchToProps = {
    addToBasket,
    removeFromBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(Library);
const StyledLibrary=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .books-container{ margin: 100px;
    display: flex;
    width: 900px;
    flex-wrap: wrap;
    justify-content:center;
  }
 ;
`;
