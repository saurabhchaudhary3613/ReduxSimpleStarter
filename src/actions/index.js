

//crete a action to select a book

export function selectBook (book) {
    
    // selectBook is a acton creator, it needs to return an action,
    //an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}