import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const ListedBook = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('read');
  const navigate = useNavigate();  // Initialize navigate function
  const handleClick = (bookId) => {
    navigate(`/books/${bookId}`); // Navigate to the book details page
  };
  useEffect(() => {
    const read = JSON.parse(localStorage.getItem('readBooks')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setReadBooks(read);
    setWishlistBooks(wishlist);
  }, []);

  const renderBookCard = (book) => (
    <div
      key={book.bookId}
      className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
    >
      {/* Book Image */}
      <div className="w-full md:w-48 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-full h-60 rounded-3xl object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Book Details */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-gradient-to-br from-white to-gray-50">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-800">{book.bookName}</h3>
          <p className="text-sm text-gray-600">
            by <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium bg-pink-100 text-pink-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="grid grid-cols-1  gap-y-1 text-sm text-gray-700">
            <p>
              <span className="font-medium">📅 Published:</span> {book.yearOfPublishing || book.year}
            </p>
            <p>
              <span className="font-medium">🏢 Publisher:</span> {book.publisher}
            </p>
            <p>
              <span className="font-medium">📄 Pages:</span> {book.totalPages || book.pageCount}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center mt-5 gap-2">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
            📘 Category: {book.category || book.genre || 'N/A'}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
            ⭐ {book.rating}
          </span>
          <button
            onClick={() => handleClick(book.bookId)}  // Navigate to the book details page
            className="ml-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-5 py-2 rounded-full shadow hover:from-purple-600 hover:to-indigo-600 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const booksToShow = activeTab === 'read' ? readBooks : wishlistBooks;

  return (
    <div className="max-w-6xl mx-auto my-20 p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center ">📚 Your Book List</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b pb-3">
        <button
          onClick={() => setActiveTab('read')}
          className={`px-5 py-2 text-sm font-semibold rounded-t transition ${
            activeTab === 'read'
              ? 'text-purple-600 border-b-2 border-purple-500'
              : 'text-gray-500 hover:text-purple-500'
          }`}
        >
          Read Books
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-5  py-2 text-sm font-semibold rounded-t transition ${
            activeTab === 'wishlist'
              ? 'text-indigo-600 border-b-2 border-indigo-500'
              : 'text-gray-500 hover:text-indigo-500'
          }`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 gap-6">
        {booksToShow.length > 0 ? (
          booksToShow.map((book) => renderBookCard(book))
        ) : (
          <p className="text-center text-gray-500">No books found in this list.</p>
        )}
      </div>
    </div>
  );
};

export default ListedBook;
