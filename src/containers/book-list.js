import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {  bindActionCreators } from 'redux';


class BookList extends Component  {
    
    renderList() {
        return this.props.books.map((book)=>{
            return(
                <li 
                    key={book.title} 
                    onClick={ () => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )

        });
    }
    
    render() {
        
        return (
            <ul className = "col-md-4 list-group">
                {this.renderList()}
            </ul>
        );
    }
    
}
function mapStateToProps (state) {
    // What ever is returned will show up as props
    // inside bookList
    return {    
        books: state.books
    }
}


// Anything returned from this function will end up as props 
//the BookList container
function mapDispatchToprops(dispatch) {
    // Whwnever select book is called the result should be passes 
    // to our reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}

// Promote BookList from a compoment to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToprops)(BookList);