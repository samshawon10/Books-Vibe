import React from 'react';
import { FaStar } from 'react-icons/fa';

const BooksCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    tags = [],
    genre = 'Fiction',
    rating = 5.0
  } = book;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 flex flex-col justify-between">
      <div className="flex justify-center items-center bg-gray-100 p-4 rounded-xl mb-4">
        <img
          src={image}
          alt={bookName}
          className="h-48 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{bookName}</h3>
      <p className="text-sm text-gray-500 mb-2">By: {author}</p>

      <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-500">{genre}</span>
        <span className="flex items-center text-sm font-medium text-yellow-500">
          {rating.toFixed(2)}
          <FaStar className="ml-1" />
        </span>
      </div>
    </div>
  );
};

export default BooksCard;
