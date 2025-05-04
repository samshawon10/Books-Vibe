import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const BooksDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  
  const [isReadAdded, setIsReadAdded] = useState(false);
  const [isWishlistAdded, setIsWishlistAdded] = useState(false);

  useEffect(() => {
    const read = JSON.parse(localStorage.getItem('readBooks')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setIsReadAdded(read.some((b) => b.bookId === book.bookId));
    setIsWishlistAdded(wishlist.some((b) => b.bookId === book.bookId));
  }, [book.bookId]);

  const handleAddToLocalStorage = (type) => {
    const key = type === 'read' ? 'readBooks' : 'wishlistBooks';
    const existing = JSON.parse(localStorage.getItem(key)) || [];

    const alreadyAdded = existing.some((b) => b.bookId === book.bookId);
    if (!alreadyAdded) {
      localStorage.setItem(key, JSON.stringify([...existing, book]));
      if (type === 'read') setIsReadAdded(true);
      else setIsWishlistAdded(true);
    }
  };

  if (!book) return <p>Book not found.</p>;

  if (!book) return <p>Book not found.</p>;

  const {
    bookName,
    author,
    image,
    genre = 'Fiction',
    review,
    tags = [],
    totalPages,
    publisher,
    yearOfPublishing,
    rating
  } = book;

  
  return (
    <>
    <div className="container mx-auto my-20">
      {/* Inline animation style */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div
        className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg opacity-0 fade-in-up"
      >
        {/* Image Section */}
        <div
          className="bg-gradient-to-tr from-gray-100 to-gray-200 p-6 rounded-xl flex justify-center items-center transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={image}
            alt={bookName}
            className="h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">{bookName}</h2>
          <p className="text-gray-600 text-md">
            <span className="font-semibold">By :</span> {author}
          </p>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
            {genre}
          </span>

          <div>
            <p className="font-semibold text-gray-800">Review :</p>
            <p className="text-sm text-gray-600 leading-relaxed">{review}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full transform transition-transform duration-300 hover:scale-110"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
            <p>
              <span className="font-medium">Pages:</span> {totalPages}
            </p>
            <p>
              <span className="font-medium">Publisher:</span>{' '}
              <span className="font-semibold">{publisher}</span>
            </p>
            <p>
              <span className="font-medium">Published:</span> {yearOfPublishing}
            </p>
            <p>
              <span className="font-medium">Rating:</span>{' '}
              <span className="text-yellow-500 font-semibold">{rating}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
          <button
              onClick={() => handleAddToLocalStorage('read')}
              disabled={isReadAdded}
              className={`px-6 py-2 rounded-md font-semibold shadow text-white ${
                isReadAdded
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 hover:opacity-90'
              }`}
            >
              {isReadAdded ? 'Already in Read' : 'Read'}
            </button>

            <button
              onClick={() => handleAddToLocalStorage('wishlist')}
              disabled={isWishlistAdded}
              className={`px-6 py-2 rounded-md font-semibold shadow text-white ${
                isWishlistAdded
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-sky-300 to-blue-400 hover:scale-105 hover:opacity-90'
              }`}
            >
              {isWishlistAdded ? 'Already in Wishlist' : 'Wishlist'}
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BooksDetails;
