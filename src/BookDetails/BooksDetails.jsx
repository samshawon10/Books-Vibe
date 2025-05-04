import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const BooksDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

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
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-md font-semibold shadow transform transition-transform duration-200 hover:scale-105 hover:opacity-90"
            >
              Read
            </button>
            <button
              className="bg-gradient-to-r from-sky-300 to-blue-400 text-white px-6 py-2 rounded-md font-semibold shadow transform transition-transform duration-200 hover:scale-105 hover:opacity-90"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetails;
