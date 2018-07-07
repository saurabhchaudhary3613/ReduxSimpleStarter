import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component  {

    render() {
        
        return (
            <div>Book details..!</div>
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