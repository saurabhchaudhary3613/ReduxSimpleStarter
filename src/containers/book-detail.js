import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component  {

    render() {
        if(!this.props.book) {
            return <div>Please select a book  to start !</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>No of pages/page: {this.props.book.pages}</div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    // What ever is returned will show up as props
    // inside bookList
    return {    
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);