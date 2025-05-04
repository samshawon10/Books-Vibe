// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const ListedBooks = () => {
//   const books = useLoaderData();

//   const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
//   const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

//   const readList = books.filter(book => readBooks.includes(book.bookId));
//   const wishlistList = books.filter(book => wishlistBooks.includes(book.bookId));

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-8">
//       <div>
//         <h2 className="text-2xl font-bold text-indigo-600">📖 Read Books</h2>
//         {readList.length === 0 ? (
//           <p className="text-gray-500 mt-2">No books marked as read.</p>
//         ) : (
//           <ul className="list-disc ml-6 mt-2">
//             {readList.map(book => (
//               <li key={book.bookId}>{book.bookName}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div>
//         <h2 className="text-2xl font-bold text-blue-500">💙 Wishlist Books</h2>
//         {wishlistList.length === 0 ? (
//           <p className="text-gray-500 mt-2">No books in wishlist.</p>
//         ) : (
//           <ul className="list-disc ml-6 mt-2">
//             {wishlistList.map(book => (
//               <li key={book.bookId}>{book.bookName}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListedBooks;
