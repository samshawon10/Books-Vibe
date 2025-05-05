import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#304146] text-white px-10 py-12 rounded-t-4xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
   
      <aside >
      <div className="flex items-start space-x-4">
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    className="fill-current text-yellow-400 mt-1"
  >
    <path d="M22.672 15.226l-2.432.811..."></path>
  </svg>

  <div className="border-l-4 border-yellow-400 pl-4 space-y-2">
  <h1 className=" text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
      Books Vibe
    </h1>
    <p className="text-sm text-gray-300 italic">
      Your portal to imagination
    </p>
    <p className="text-sm text-gray-400 leading-snug max-w-sm">
      Discover your next favorite story and unlock new worlds with every page.
    </p>
    <p className="text-sm text-gray-400">
    📍 123 Book Lane, Storytown, USA
  </p>

   
  </div>
</div>

</aside>



        <nav>
          <h6 className="footer-title text-xl font-bold mb-2">Services</h6>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-yellow-300 transition">Branding</a></li>
            <li><a className="hover:text-yellow-300 transition">Design</a></li>
            <li><a className="hover:text-yellow-300 transition">Marketing</a></li>
            <li><a className="hover:text-yellow-300 transition">Advertisement</a></li>
          </ul>
        </nav>

        <nav>
          <h6 className="footer-title text-xl font-bold mb-2">Company</h6>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-yellow-300 transition">About us</a></li>
            <li><a className="hover:text-yellow-300 transition">Contact</a></li>
            <li><a className="hover:text-yellow-300 transition">Jobs</a></li>
            <li><a className="hover:text-yellow-300 transition">Press kit</a></li>
          </ul>
        </nav>

        <nav>
          <h6 className="footer-title text-xl font-bold mb-2">Legal</h6>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:text-yellow-300 transition">Terms of use</a></li>
            <li><a className="hover:text-yellow-300 transition">Privacy policy</a></li>
            <li><a className="hover:text-yellow-300 transition">Cookie policy</a></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-yellow-300 font-bold">Books Vibe</span>. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
          <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
          <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-300"><FaLinkedin /></a>
        </div>
        <p className="text-sm mt-4 md:mt-0 italic text-right text-pink-200">Crafted with ❤️ by <span className="font-bold text-white">Sam Shawon</span></p>
      </div>
    </footer>
  );
};

export default Footer;
