import React, { useState, useEffect } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/public/booksData.json') 
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-6">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {
                books.map(book => <BooksCard book={book} key={book.bookId}></BooksCard> )
            }
            </div>
        </div>
    );
};

export default Books;
