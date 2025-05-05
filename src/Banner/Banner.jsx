import React from 'react';
import BannerImage from '../assets/books.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleViewBooks = () => {
    navigate('/books');
  };
    return (
        <div className="hero bg-base-200 min-h-screen mb-20 rounded-4xl my-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Discover Your Next Great Read
            </h1>
            <p className="py-6">
              Welcome to our Book Store! Here, you can explore a wide range of books across various genres. Whether you're looking for the latest bestsellers, classic literature, or educational resources, we have something for everyone.
              Books are a treasure trove of knowledge, adventure, and imagination. They transport us to different worlds, introduce us to new ideas, and inspire us to dream big.
              <br />
              <br />
              
            
            </p>
            <button
            onClick={handleViewBooks}
            className="ml-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-5 py-2 rounded-full shadow hover:from-purple-600 hover:to-indigo-600 transition"
          >
            View The List
          </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;